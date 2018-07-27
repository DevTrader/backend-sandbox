const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/test3', { useNewUrlParser: true });

const MyModel = mongoose.model('MyModelName', {
    title:{
        type: String
    },
    body:{
        type: Object
    },
    createdDate:{
        type: Date
    },
    arrayThing:{
        type: Array
    }
})

const someModel = new MyModel({
    title: 'Just title, nothing else is required'
})

someModel.save()
.then(()=>{
    console.log('[SAVED TODO]')
})
.catch(err=>{console.log('[UNABLE TO SAVE]')})

const completeModel = new MyModel({
    title:'First complete model, I should have learned this before...',
    body:{
        test: 1,
        array:[1,2,3],
        boolean: true,
        logic: (true)? 7 : 0,
        myFunction: ()=>{let a = 'this was returned by a function'; return a}
    },
    createdDate: new Date().toISOString(),
    arrayThing:[55, 234, "hello"]
})

completeModel.save()
    .then(()=>{
        console.log('[SUCCESS]')
    }, (err)=>{console.log('[FAILED TO SAVE COMPLETEMODEL]')})