/**
 * Created by JoshuaK on 5/30/2017.
 */
// array of pre-defined quotes
var quotes = [
    'Walk as if you are kissing the Earth with your feet. ― Thich Nhat Hanh',
    'Sometimes your joy is the source of your smile, but sometimes your smile can be the source of your joy. ― Thich Nhat Hanh',
    'To be beautiful means to be yourself. You don’t need to be accepted by others. You need to accept yourself. ― Thich Nhat Hanh',
    'People have a hard time letting go of their suffering. Out of a fear of the unknown, they prefer suffering that is familiar. ― Thich Nhat Hanh',
    'Because you are alive, everything is possible. ― Thich Nhat Hanh',
    'Feelings come and go like clouds in a windy sky. Conscious breathing is my anchor. ― Thich Nhat Hanh',
    'Waking up this morning, I smile. Twenty-four brand new hours are before me. I vow to live fully in each moment and to look at all beings with eyes of compassion. ― Thich Nhat Hanh',
    'Smile, breathe and go slowly. ― Thich Nhat Hanh',
    'Many people think excitement is happiness.... But when you are excited you are not peaceful. True happiness is based on peace. ― Thich Nhat Hanh',
    'The seed of suffering in you may be strong, but don\'t wait until you have no more suffering before allowing yourself to be happy. ― Thich Nhat Hanh',
    'Hope is important because it can make the present moment less difficult to bear. If we believe that tomorrow will be better, we can bear a hardship today. ― Thich Nhat Hanh',
    'If you love someone but rarely make yourself available to him or her, that is not true love. ― Thich Nhat Hanh',
    'Breathing in, I calm body and mind. Breathing out, I smile. Dwelling in the present moment I know this is the only moment. ― Thich Nhat Hanh',
    'My actions are my only true belongings. ― Thich Nhat Hanh',
    'You must love in such a way that the person you love feels free. ― Thich Nhat Hanh',
    'Drink your tea slowly and reverently, as if it is the axis on which the world earth revolves - slowly, evenly, without rushing toward the future. ― Thich Nhat Hanh',
    'For things to reveal themselves to us, we need to be ready to abandon our views about them. ― Thich Nhat Hanh',
    'Our own life has to be our message. ― Thich Nhat Hanh',
    'The present moment is filled with joy and happiness. If you are attentive, you will see it. ― Thich Nhat Hanh',
    'Life is available only in the present moment. ― Thich Nhat Hanh',
    'We are here to awaken from our illusion of separateness. ― Thich Nhat Hanh',
    'I promise myself that I will enjoy every minute of the day that is given me to live. ― Thich Nhat Hanh',
    'The mind can go in a thousand directions, but on this beautiful path, I walk in peace. With each step, the wind blows. With each step, a flower blooms. ― Thich Nhat Hanh',
]

// function to generate a random quote and tweet about it if so desired
function randomQuote() {
    var randomNum = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteBox').innerHTML = quotes[randomNum];
    var tweetQuote = quotes[randomNum];
    tweetQuote = "https://twitter.com/intent/tweet?text=" + tweetQuote.split('"').join('')
    $('.twitter-share-button').attr('href', tweetQuote);
}