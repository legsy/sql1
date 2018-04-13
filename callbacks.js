function func1(callback)
{
    //do something
    callback();
}

function onInit()
{
    console.log("initialization");
}

func1(onInit);