import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let prueba: AppComponent;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    prueba = new AppComponent(prueba as any);
  });


  it('Retorna las palabras repetidas de un texto', () => {
    let pruebaTexto = 'Palabras repetidas que de se deben repetir las palabras';
    let textArray = pruebaTexto.split(" ");
    let wordsRepeatAndCount = [];

    const dataArr = new Set(textArray);
    let textWithoutRepeatedWords = [...dataArr];

    for (let i = 0; i < textWithoutRepeatedWords.length; i++) {
      let wordsRepeat = textArray.filter(t => t == textWithoutRepeatedWords[i]);

      if (wordsRepeat && wordsRepeat.length > 1) {
        wordsRepeatAndCount.push({ word: textArray[i], count: wordsRepeat.length });
      }
    }
    expect(prueba.searchWordRepeat(pruebaTexto))
  })
});
