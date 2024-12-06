import { AfterViewInit, Component } from '@angular/core';
import { PlayerModel } from '../../Models/player.model';
import { OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-home',
  imports: [CommonModule, NavbarComponent, FontAwesomeModule],
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

  settingBtnY = 0;
  getOffSetY =()=>this.settingBtnY

  settingBtnX = 0;  
  getOffSetX =()=>this.settingBtnX
  ngOnInit(){
    this.CalculatePlayerLevel();
  }

  public CalculatePlayerLevel(){
    let lv = this.playerModel.Exp / 100
    this.playerLevel = lv.toString()
  }
  dropShow=false

  openDropDown(){
    this.dropShow= !this.dropShow
    const settingsButton = document.getElementById('settingsButton')!;
    const settingsDrop = document.getElementById('settingsDrop')!;
    
    // Calcolare la posizione del bottone rispetto alla pagina
    const buttonRect = settingsButton.getBoundingClientRect();
    const dorpRect = settingsDrop.getBoundingClientRect();
    const dropTranslation = buttonRect.width / 2
    
    // Posizionare la dropdown sotto il bottone
    settingsDrop.style.position = "fixed"; // Usare "absolute" invece di "fixed"
    settingsDrop.style.zIndex = "9999";
    settingsDrop.style.top = `${buttonRect.bottom}px`; // Posizionarla sotto il bottone
    settingsDrop.style.left = `${buttonRect.left}px`; // Allinearla con il bordo sinistro del bottone
    
    // Log per debug
    console.log("y: " + dorpRect.width);
    console.log("x: " + buttonRect.width );
  }
}
