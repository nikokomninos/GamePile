use rusqlite::{params, Connection, Result};

pub fn init() -> Result<()> {
    let conn = Connection::open("backlog.db")?;

    conn.execute(
        "CREATE TABLE IF NOT EXISTS backlog (
igdb_id INTEGER PRIMARY KEY,
category TEXT NOT NULL,
name TEXT NOT NULL,
desc TEXT NOT NULL,
cover TEXT NOT NULL,
platforms TEXT NOT NULL,
screenshot TEXT NOT NULL
)",
        (),
    )?;

    Ok(())
}

pub fn add(
    igdb_id: &i32,
    category: &str,
    name: &str,
    desc: &str,
    cover: &str,
    platforms: &Vec<String>,
    screenshot: &str,
) -> Result<()> {
    let conn = Connection::open("backlog.db")?;

    conn.execute(
        "INSERT INTO backlog VALUES (?1, ?2, ?3, ?4, ?5, ?6, ?7)",
        params![
            igdb_id,
            category,
            name,
            desc,
            cover,
            platforms.join(","),
            screenshot
        ],
    )?;

    Ok(())
}

pub fn list_category(category: &str) -> Result<String, String> {
    let conn = Connection::open("backlog.db").map_err(|e| e.to_string())?;
    let mut stmt = conn
        .prepare(
            "SELECT igdb_id, name, desc, cover, platforms, screenshot
FROM backlog
WHERE category=?1",
        )
        .map_err(|e| e.to_string())?;

    let game_iter = stmt
        .query_map([category], |row| {
            Ok((
                row.get::<_, i32>(0)?,
                row.get::<_, String>(1)?,
                row.get::<_, String>(2)?,
                row.get::<_, String>(3)?,
                row.get::<_, String>(4)?,
                row.get::<_, String>(5)?,
            ))
        })
        .map_err(|e| e.to_string())?;

    let games: Vec<(i32, String, String, String, String, String)> = game_iter
        .collect::<Result<_, _>>()
        .map_err(|e| e.to_string())?;

    let json = serde_json::to_string(&games).map_err(|e| e.to_string())?;

    Ok(json)
}

pub fn remove_game(igdb_id: &i32) -> Result<()> {
    let conn = Connection::open("backlog.db")?;

    conn.execute("DELETE FROM backlog WHERE igdb_id=?1", params![igdb_id])?;

    Ok(())
}
