export interface PlayerModel{
    Id: number;
    Username: string;
    Exp: number;
    IsConfigured: boolean;
    SkillList: PlayerSkillModel[];
    ActiveQuest: PlayerQuestModel[];
    Streak: number;
    CompletedQuestCount: number;
    IsAdmin: boolean;
    LastWeeklyUpdate: Date;
    LastDailyUpdate: Date;
    ImgUrl: string;
}

export interface PlayerSkillModel{
    PlayerId: number;
    SkillId: number;
    SkillExp: number;
}

export interface PlayerQuestModel{
    PlayerId: number;
    QuestId: number;
    IsActive: boolean;
}