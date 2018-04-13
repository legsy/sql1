var mathModule = (function(){
    var innerParameter = 0;
    return {
        addMe: function(par1){
            innerParameter += par1;
        },
        printCurrentState: function(){
            console.log(innerParameter);
        },
        value: function(){
            return innerParameter;
        },
        multipleMe: function(par1){
            innerParameter *= par1;
        },
        clean: function(){
            innerParameter = 0;
        }
    }
}());