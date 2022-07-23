

//―――――――――OBJ_YoutubeLinkー―――――――――――――
const YoutubeLink_Click = new Entity()
YoutubeLink_Click.addComponent(new PlaneShape())
YoutubeLink_Click.addComponent(new Transform({
    position: new Vector3(14.71, 1.824, 11.979),
    rotation: new Quaternion(0, 0.7071068, 0, 0.7071068),
    scale: new Vector3(0.697, 0.659, 0.246)
}))

YoutubeLink_Click.addComponent(new OnPointerDown((e) =>{

    //★★★★URL 変更ポイント ★★★★★★★★★★★★★★★★★★★★★★★★
    openExternalURL("https://youtube")
},
    {
        hoverText: "Open youtube",
    }
))
 

engine.addEntity(YoutubeLink_Click)


//―――――――――OBJ_TwitterLinkー―――――――――――――
const TwitterLink_Click = new Entity()
TwitterLink_Click.addComponent(new PlaneShape())
TwitterLink_Click.addComponent(new Transform({
    position: new Vector3(14.713, 1.784, 10.66401),
    rotation: new Quaternion(0, 0.7071068, 0, 0.7071068),
    scale: new Vector3(0.697, 0.659, 0.246)

}))

TwitterLink_Click.addComponent(new OnPointerDown((e) => {

    //★★★★URL 変更ポイント ★★★★★★★★★★★★★★★★★★★★★★★★★★★
    openExternalURL("https://twitter")
},
    {
        hoverText: "Open twitter",
    }
))

engine.addEntity(TwitterLink_Click)


//―――――――――OBJ_WebsiteLinkー―――――――――――――
const WebsiteLink_Click = new Entity()
WebsiteLink_Click.addComponent(new PlaneShape())
WebsiteLink_Click.addComponent(new Transform({
    position: new Vector3(14.749, 1.794, 13.292),
    rotation: new Quaternion(0, 0.7071068, 0, 0.7071068),
    scale: new Vector3(0.697, 0.659, 0.246)
}))

WebsiteLink_Click.addComponent(new OnPointerDown((e) => {

    //★★★★URL 変更ポイント ★★★★★★★★★★★★★★★★★★★★★★★★★★★★★★
    openExternalURL("https://website")
},
    {
        hoverText: "Open Website",
    }
))
engine.addEntity(WebsiteLink_Click)


//---------------Music-----------------------------------------------------------------------------------


let Sounds_OnOff = false      //Soundsのオンオフのbool、const不可

const PlaneSounds_click = new Entity()
PlaneSounds_click.addComponent(new PlaneShape())   //形をあたえる
PlaneSounds_click.addComponent(new Transform({
    position: new Vector3(14.396, 1.96, 9.32),
    rotation: new Quaternion(0, 0.7071068, 0, 0.7071068),
    scale: new Vector3(0.77, 1.334, 0.338)
}))
PlaneSounds_click.addComponent(new OnPointerDown((e) => {
    Sounds_OnOff = !Sounds_OnOff            //boolをインバースするためのコード
    if (Sounds_OnOff == true) {
        sound_Background_source.playing = true

    }
    if (Sounds_OnOff == false) {
        sound_Background_source.playing = false
    }
},
    {
        hoverText: "Music On/Off",
    }

))

engine.addEntity(PlaneSounds_click)

//---------音楽の発信源-----------------
const Sounds_plate1 = new Entity()
Sounds_plate1.addComponent(new Transform({
    position: new Vector3(8, 8, 8),
    scale: new Vector3(2, 2, 2),
}))
engine.addEntity(Sounds_plate1)


//――――音楽1――――――

//★★★★URL 変更ポイント ★★★★★★★★★★★★★★★★★★★★★★★★★★★★
const sound_Background = new AudioClip("sounds/fog.mp3")
const sound_Background_source = new AudioSource(sound_Background)
sound_Background_source.loop = true
sound_Background_source.playing = false
sound_Background_source.volume = 0.6
Sounds_plate1.addComponent(sound_Background_source)

