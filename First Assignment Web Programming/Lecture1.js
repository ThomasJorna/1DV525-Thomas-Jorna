/**
 * Created by Thomas on 9/7/2016.
 */
"use strict";

const registerStudent = function(name, age, ... courses){
    console.log(courses);
}
registerStudent('Ellen', 30, 'JEMAMA', 'Sexy');
const courses = ['sefsf', 'sfas', 'aewfas'];
registerStudent('ellen', 30, ...courses);
