
let waterfall = openDatabase('waterfall', '1.0', 'steam', 10*1024*1024);

waterfall.transaction(function(tx){
    tx.executeSql('CREATE TABLE IF NOT EXISTS TILE (ID INTEGER PRIMARY KEY ASC, TILE_TITLE TEXT, TILE_TYPE TEXT, TILE_DESC TEXT, TILE_COVER TEXT, TILE_START INTEGER)');
});

export default waterfall;
