const development = {
    name: 'development',
    asset_path: './assets',
    db: 'mongodb://localhost/csv_development',

}
const production = {
    name: 'production',
    asset_path: process.env.ASSET_PATH,
    db:  process.env.MONGO_URI,
}
// console.log(eval(process.env.NODE_ENV)+' '+process.env.PLACEMENT_CELL_SESSION_COOKIE_KEY);

module.exports = eval(process.env.NODE_ENV) == undefined ? development : eval(process.env.PLACEMENT_ENVIROMENT);