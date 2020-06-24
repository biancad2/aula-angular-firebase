import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-fire-question',
  templateUrl: './fire-question.component.html',
  styleUrls: ['./fire-question.component.css']
})
export class FireQuestionComponent implements OnInit {
  listRef: AngularFireList<any>;
  list: Observable<any[]>;
 
  constructor(private db: AngularFireDatabase) {
    //Aqui eu vou colocar o nome do banco
    this.listRef = db.list('questions');

    this.list = this.listRef.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );
  }
  add(q: string, a: string, a1: string, a2: string, a3: string, a4: string,) {
    this.listRef.push(
      {
        question: q,
        answer: a,
        alternative1: a1,
        alternative2: a2,
        alternative3: a3,
        alternative4: a4,
      }
    );
  }

  delete(key: string){
    this.listRef.remove(key);
  }

  ngOnInit(): void {
  }

}
