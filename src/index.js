import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Trivia from './trivia-service.js';

//type = # , level = word

$(document).ready(function() {
  $('button').on('click', function(){
    const category = 11;
    const level = "easy";
    // const html = "";

    let promise = Trivia.getTrivia(category, level);

    promise.then(function(response){
      const body = JSON.parse(response);
      const result = body.results.map((item) => item.question);
      const resultArr = result.map(function(item){
        let firstEdit = item.replaceAll("&#039;", "'");
        let secondEdit = firstEdit.replaceAll("&quot;", '"');
        return secondEdit;
      });
      for (const question of resultArr) {
        $('#output').text(`${question}`);
      }
    });
  });
});