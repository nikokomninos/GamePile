mod db;

use rusqlite::{params, Connection, Result};

/// Searches the IGDB database for an inputted string and
/// returns an array of results
///
/// # Arguments
///
/// * `search` - the search term
///
/// # Returns
///
/// An array containing the search results. Each element contains
/// the fields: name, summary, cover.url, platforms.abbreviation,
/// platforms.name, screenshots.url
#[tauri::command]
async fn search_games(term: String) -> Result<String, String> {
    let client_id = std::env::var("IGDB_CLIENT_ID").map_err(|e| e.to_string())?;
    let authorization = format!(
        "Bearer {}",
        std::env::var("IGDB_AUTHORIZATION").map_err(|e| e.to_string())?
    );

    let query = format!("search \"{}\"; fields name, summary, cover.url, platforms.abbreviation, platforms.name, screenshots.url; limit 100;", term);

    let client = reqwest::Client::new();
    let res = client
        .post("https://api.igdb.com/v4/games")
        .header("Client-ID", client_id)
        .header("Authorization", authorization)
        .header("Accept", "application/json")
        .body(query)
        .send()
        .await
        .map_err(|e| e.to_string())?;

    let body = res.text().await.map_err(|e| e.to_string())?;
    Ok(body)
}

/// Returns game info for game given its IGDB ID
///
/// # Arguments
///
/// * 'id' - a game's internal IGDB ID
///
/// # Returns
///
/// An array containing game info. Contains
/// the fields: name, summary, cover.url,
/// platforms.name, screenshots.url
#[tauri::command]
async fn fetch_game_info(id: i32) -> Result<String, String> {
    let client_id = std::env::var("IGDB_CLIENT_ID").map_err(|e| e.to_string())?;
    let authorization = format!(
        "Bearer {}",
        std::env::var("IGDB_AUTHORIZATION").map_err(|e| e.to_string())?
    );

    let query = format!(
        "fields name, summary, cover.url, platforms.name, screenshots.url; where id={}; limit 100;",
        id
    );

    let client = reqwest::Client::new();
    let res = client
        .post("https://api.igdb.com/v4/games")
        .header("Client-ID", client_id)
        .header("Authorization", authorization)
        .header("Accept", "application/json")
        .body(query)
        .send()
        .await
        .map_err(|e| e.to_string())?;

    let body = res.text().await.map_err(|e| e.to_string())?;
    Ok(body)
}

#[tauri::command]
async fn db_add_game(
    igdb_id: i32,
    category: String,
    name: String,
    desc: String,
    cover: String,
    platforms: Vec<String>,
    screenshot: String,
) -> String {
    db::add(
        &igdb_id,
        &category,
        &name,
        &desc,
        &cover,
        &platforms,
        &screenshot,
    )
    .unwrap();
    "Game added successfully".into()
}

#[tauri::command]
async fn db_list_category(category: String) -> Result<String, String> {
    db::list_category(&category).map_err(|e| e.to_string())
}

#[tauri::command]
async fn db_remove_game(igdb_id: i32) -> String {
    db::remove_game(&igdb_id);
    "Game successfully removed".into()
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    dotenvy::dotenv().ok();
    db::init().expect("Failed to init database");
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![
            search_games,
            fetch_game_info,
            db_add_game,
            db_list_category,
            db_remove_game
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
