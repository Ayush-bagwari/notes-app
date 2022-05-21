// const validate = require('validator');
const chalk = require('chalk');
const yargs = require('yargs');
const notes = require('./notes.js');
// const sum = new1('wleome');
const cmd = process.argv[2];
yargs.version("17.4.0");
// console.log(yargs.argv);
// console.log(sum);
// console.log(validate.isURL('http://udemy.com'));
// console.log(chalk.green('Hello worldoo!'));
// yargs.command({
//     command:'add',
//     describe:'new node',
//     handler:function(){
//         console.log('yeah adding new node');
//     }
// });

// yargs.command({
//     command:'remove',
//     describe:'old node',
//     builder:{
//         title:{
//             describe : 'New Title' 
//         }
//     },
//     handler:function(argv){
//         console.log('yeah removing old node',argv);
//     }
// });
// console.log(yargs.argv);

yargs.command({
    command:'add',
    describe:'Add a new note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'Note body',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body);
    }
});

yargs.command({
    command:'remove',
    describe:'Remove a node',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        }
    },    
    handler(argv){
        notes.removeNote(argv.title);
    }
});

yargs.command({
    command:'list',
    describe:'List the nodes',
    handler(argv){
        notes.listNote();
    }
});

yargs.command({
    command:'read',
    describe:'Read the nodes',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string'
        }
    }, 
    handler(argv){
        notes.readNote(argv.title);
    }
});

yargs.parse();
