const hours = ['Twelve', 'One', 'Two', 'Three', 'Four',
                'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven']

const minutes1 = ['Oh', null, 'Twenty', 'Thirty', 'Forty', 'Fifty']

const minutes2 = ['clock', 'One', 'Two', 'Three', 'Four', 'Five', 'Six',
                    'Seven', 'Eight', 'Nine', 'Ten', 'Eleven',
                    'Twelve', 'Thirteen', 'Fourteen', 'Fifteen',
                    'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen']


/** Accepts a string time(military time) and
 * converts into a string of words that represent the time
 *
 * Ex: "01:32" => "One thirty two AM"
*/
function convertTimeIntoWords(timeString){
    const time = timeString.split(':');
    let hr = parseInt(time[0]);
    let min1 = time[1]; // string value
    let timePeriod = 'AM';

    if (hr >= 12) {
        timePeriod = "PM";
        hr = hr - 12;
    };

    if (min1[0] === '1'){
        // if minutes are in the "teens"
        min1 = parseInt(min1);
        return `${hours[hr]} ${minutes2[min1]} ${timePeriod}`
    }
    else {
        // if minutes are not in teens, min digits are split between 2 variables
        let min2 = parseInt(min1[1]);
        min1 = parseInt(min1[0]);
        return `${hours[hr]} ${minutes1[min1]} ${minutes2[min2]} ${timePeriod}`
    }
}

module.exports = convertTimeIntoWords
