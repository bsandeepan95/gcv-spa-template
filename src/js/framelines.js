/**
 * @copyright Sandeepan Bhattacharyya
 * @license
 * 1. The code structure and logic in this file is licensed under GNU GPL v3. 
 *      To view a copy of this license, See the local **LICENSE-code** file.
 * 2. Any and all dummy data content in this work is licensed under the 
 *      Creative Commons Attribution-NonCommercial-ShareAlike 4.0  
 *      International License. To view a copy of this license, visit 
 *      http://creativecommons.org/licenses/by-nc-sa/4.0/ or send a letter to 
 *      Creative Commons, PO Box 1866, Mountain View, CA 94042, USA.
 * 
 * @author Sandeepan Bhattacharyya <bsandeepan95.work@gmail.com>
 * @file This script sets framelines styling dynamically.
*/

(function(){
    // put theme color in framelines
    let frames = document.querySelector("#framelines").getElementsByTagName("div");
    for (let i = 0; i < frames.length; i++) frames[i].style.background = Settings.todayTheme;
})();
