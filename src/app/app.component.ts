import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { WordsRepeat } from './model/wordRepeat';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  displayedColumns: string[] = ['word', 'count'];
  dataSource: WordsRepeat[];

  title = 'Palabras repetidas';
  formGroup: FormGroup = this.formWords();


  constructor(
    private fb: FormBuilder
  ) {
    this.formWords();
  }

  ngOnInit() {
  }

  formWords(): FormGroup {
    return this.fb.group({
      text: ['']
    });
  }

  searchWordRepeat(text: string) {
    let textWithoutDotOrCommas = text.replace(/[.*\,]/g, '');
    let textArray = textWithoutDotOrCommas.split(" ");
    let wordsRepeatAndCount = [];

    const dataArr = new Set(textArray);
    let textWithoutRepeatedWords = [...dataArr];

    for (let i = 0; i < textWithoutRepeatedWords.length; i++) {
      let wordsRepeat = textArray.filter(t => t == textWithoutRepeatedWords[i]);

      if (wordsRepeat && wordsRepeat.length > 1) {
        wordsRepeatAndCount.push({ word: textArray[i], count: wordsRepeat.length });
      }
    }
    this.dataSource = wordsRepeatAndCount;
  }

  searchWordsRepeat() {
    this.searchWordRepeat(this.text.value);
  }

  get text() { return this.formGroup.get('text') as FormControl }
}
