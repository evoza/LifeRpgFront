import { Component } from '@angular/core';
import { PlayerModel } from '../../Models/player.model';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  playerModel: PlayerModel = {
    Id: 1,
    Username: 'TestUser',
    Exp: 1000,
    IsConfigured: true,
    SkillList: [],
    ActiveQuest: [],
    Streak: 0,
    CompletedQuestCount: 0,
    IsAdmin: false,
    LastWeeklyUpdate: new Date(),
    LastDailyUpdate: new Date(),
    ImgUrl: 'https://i.pinimg.com/736x/b5/59/61/b5596101c9cc2974a45f65bc03547ddc.jpg'
  };
  public playerLevel: string = '';
  
  constructor() {
    
  }

  ngOnInit(){
    this.CalculatePlayerLevel();
  }

  public CalculatePlayerLevel(){
    let lv = this.playerModel.Exp / 100
    this.playerLevel = lv.toString()
  }
}
