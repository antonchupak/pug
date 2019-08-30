import './index.sass';

$( document ).ready(function() {
  const text = 'Push me';
  const satisfaction = `${text}, and then just touch me`;

  (() =>console.log(satisfaction))();
});
