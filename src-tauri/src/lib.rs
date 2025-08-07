#[tauri::command]
async fn fetch_game_info(name: String) -> Result<String, String> {
    let client_id = std::env::var("IGDB_CLIENT_ID").map_err(|e| e.to_string())?;
    let authorization = format!("Bearer {}", std::env::var("IGDB_AUTHORIZATION").map_err(|e| e.to_string())?);

    let query = format!("search \"{}\"; fields name, summary, cover.url, platforms.abbreviation, platforms.name, screenshots.url; limit 100;", name);

    let client = reqwest::Client::new();
    let res = client.post("https://api.igdb.com/v4/games")
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

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    dotenvy::dotenv().ok();
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .invoke_handler(tauri::generate_handler![fetch_game_info])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
