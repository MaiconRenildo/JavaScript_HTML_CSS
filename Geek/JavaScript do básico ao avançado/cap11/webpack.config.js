module.exports={
  entry:'./src/main.js',
  output:{
    path:__dirname+'/public',
    filename:'bundle.js',
  },
  devServer:{
    contentBase:__dirname+'/public',
  },
  module:{
    rules:[
      {
        test:/\.js$/,
        //excluded:/node_modules/,    Depois que eu exclui funcionou
        use:{
          loader:'babel-loader'
        }
      }
    ],
  }
}