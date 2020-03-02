module.exports = function (eleventyconfig){
    eleventyconfig.addPassthroughCopy('assets')
    return{
        passthroughFileCopy : true 
    }
}