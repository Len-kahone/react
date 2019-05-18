const path=require("path")
const htmlWebpackPlugin=require("html-webpack-plugin")


const htmlPlugin=new htmlWebpackPlugin({
    template:path.join(__dirname,'./src/index.html'),
    filename:'index.html'
})


module.exports={

    mode:'development',
    plugins:[htmlPlugin]
        
    
}