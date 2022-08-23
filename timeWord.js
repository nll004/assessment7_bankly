const hours = ['Twelve', 'One', 'Two', 'Three', 'Four',
                'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Eleven']

const minutes1 = ['Oh', null, 'Twenty', 'Thirty', 'Forty', 'Fifty']

const minutes2 = [null, 'One', 'Two', 'Three', 'Four', 'Five', 'Six',
                    'Seven', 'Eight', 'Nine', 'Ten', 'Eleven',
                    'Twelve', 'Thirteen', 'Fourteen', 'Fifteen',
                    'Sixteen', 'Seventeen', 'Eighteen', 'Nineteen']


/** Accepts a string time(military time) and
 * converts into a string of words that represent the time
 *
 * Ex: 01:32 => One thirty two AM
*/
function convertTimeIntoWords(timeString){
    const time = timeString.split(':');
    let hr = parseInt(time[0]);
    let min = time[1]; // string value
    let timePeriod = 'AM';

    if (hr > 12) {
        timePeriod = "PM";
        hr = hr - 12;
    };

    if (min[0] === '1'){
        min = parseInt(min);
        console.log(`${hours[hr]} ${minutes2[min]} ${timePeriod}`)
        return `${hours[hr]} ${minutes2[min]} ${timePeriod}`
    }
    else {
        let min2 = parseInt(min[1]);
        min = parseInt(min[0])
        console.log(`${hours[hr]} ${minutes1[min]} ${minutes2[min2]} ${timePeriod}`)
        return `${hours[hr]} ${minutes2[min]} ${timePeriod}`
    }
}

module.exports = convertTimeIntoWords, hours, minutes1, minutes2
