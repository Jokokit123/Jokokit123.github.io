var Music = document.getElementById('AudioPlayer');
var ProgressBar = document.getElementById('SongProgress');
var OSTs = ["Echoes Of The Salvific Ocean Depths", "As Darkness Overshadows Light"];
var Extentions = [".png" , ".gif"];
var IconState = "play";
var MusicVolume = "volume";
var OptionSelected = 'none';
var Progress = 0;
var OSTsIndex = 0;
var OSTsPreviousIndex = -999;

Music.addEventListener( 'timeupdate' , GetMusicProgress , false );
Music.addEventListener('ended', ExecuteOption, false);

document.addEventListener('DOMContentLoaded', function () {  
    const PlayPauseIcon = document.getElementById('PlayPauseIcon');
    PlayPauseIcon.addEventListener('mousemove', SwitchToGif, false);
    PlayPauseIcon.addEventListener('mouseout', SwitchToPng, false);
	PlayPauseIcon.addEventListener('click', SwitchState, false);
	Music.addEventListener('ended', SwitchStateCondition, false);
    function SwitchToGif() {
        PlayPauseIcon.setAttribute("src", "Icons/" + IconState + Extentions[1]);
    }
	function SwitchToPng() {
        PlayPauseIcon.setAttribute("src", "Icons/" + IconState + Extentions[0]);
    }
	function SwitchState() {
		if (IconState == "play") 
			IconState = "pause";
		else
			IconState = "play";
		PlayPauseIcon.setAttribute("src", "Icons/" + IconState + Extentions[0]);
    }
	function SwitchStateCondition() {
		if (OptionSelected == 'none') {
			SwitchState();
		}
	}
});

document.addEventListener('DOMContentLoaded', function () { 
    const ForwardIcon = document.getElementById('ForwardIcon');
    ForwardIcon.addEventListener('mousemove', SwitchToGif, false);
    ForwardIcon.addEventListener('mouseout', SwitchToPng, false);
	ForwardIcon.addEventListener('click', UpdateMusic, false);
    function SwitchToGif() {
        ForwardIcon.setAttribute("src", "Icons/forward" + Extentions[1]);
    }
	function SwitchToPng() {
        ForwardIcon.setAttribute("src", "Icons/forward" + Extentions[0]);
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const BackwardIcon = document.getElementById('BackwardIcon');
    BackwardIcon.addEventListener('mousemove', SwitchToGif, false);
    BackwardIcon.addEventListener('mouseout', SwitchToPng, false);
	BackwardIcon.addEventListener('click', UpdateMusic, false);
    function SwitchToGif() {
        BackwardIcon.setAttribute("src", "Icons/backward" + Extentions[1]);
    }
	function SwitchToPng() {
        BackwardIcon.setAttribute("src", "Icons/backward" + Extentions[0]);
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const VolumeIcon = document.getElementById('VolumeIcon');
    VolumeIcon.addEventListener('mousemove', SwitchToGif, false);
    VolumeIcon.addEventListener('mouseout', SwitchToPng, false);
	VolumeIcon.addEventListener('click', SwitchState, false);
    function SwitchToGif() {
        VolumeIcon.setAttribute("src", "Icons/" + MusicVolume + Extentions[1]);
    }
	function SwitchToPng() {
        VolumeIcon.setAttribute("src", "Icons/" + MusicVolume + Extentions[0]);
    }
	function SwitchState() {
		if (MusicVolume == "volume") 
			MusicVolume = "mute";
		else
			MusicVolume = "volume";
		VolumeIcon.setAttribute("src", "Icons/" + MusicVolume + Extentions[0]);
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const SettingsIcon = document.getElementById('SettingsIcon');
    const SettingsOptions = document.getElementById('SettingsOptions');
    SettingsIcon.addEventListener('click', DisplaySettings, false);
	document.addEventListener('click', ClickOutsideToHide, false);
	function DisplaySettings() {
        if (SettingsOptions.style.display === 'flex') {
            SettingsOptions.style.display = 'none';
        } 
		else {
            SettingsOptions.style.display = 'flex';
        }
	}
	function ClickOutsideToHide(event) {
        if (!SettingsIcon.contains(event.target) && !SettingsOptions.contains(event.target)) {
            SettingsOptions.style.display = 'none';
        }
    }
});

document.addEventListener('DOMContentLoaded', function () {
	const SettingsIcon = document.getElementById('SettingsIcon');
    const LoopIcon = document.getElementById('LoopIcon');
	const PlaylistIcon = document.getElementById('PlaylistIcon');
	const ShuffleIcon = document.getElementById('ShuffleIcon');
	LoopIcon.addEventListener('click', SelectLoop, false);
	PlaylistIcon.addEventListener('click', SelectPlaylist, false);
    ShuffleIcon.addEventListener('click', SelectShuffle, false);
	function SelectLoop() {
		if (OptionSelected != 'loop') {
			SelectOption('loop');
		}
		else {
			SelectOption('none');
		}
    }
	function SelectPlaylist() {
        if (OptionSelected != 'playlist') {
			SelectOption('playlist');
		}
		else {
			SelectOption('none');
		}
    }
	function SelectShuffle() {
        if (OptionSelected != 'shuffle') {
			SelectOption('shuffle');
		}
		else {
			SelectOption('none');
		}
    }
	
    function SelectOption(Option) {
        OptionSelected = Option;
		SwitchLoopToPng();
		SwitchPlaylistToPng();
		SwitchShuffleToPng();

        if (OptionSelected == 'loop') {
			SwitchLoopToGif();
        } 
		else {
			SwitchLoopToPng();
        }

        if (OptionSelected == 'playlist') {
			SwitchPlaylistToGif();
        } 
		else {
			SwitchPlaylistToPng();
        }

        if (OptionSelected == 'shuffle') {
			SwitchShuffleToGif();
        } 
		else {
			SwitchShuffleToPng();
        }
		
		if (OptionSelected == 'none') {
			SwitchSettingsToPng();
        } 
		else {
			SwitchSettingsToGif();
        }
    }
	
	function SwitchSettingsToGif() {
        SettingsIcon.setAttribute("src", "Icons/settings" + Extentions[1]);
    }
	function SwitchSettingsToPng() {
        SettingsIcon.setAttribute("src", "Icons/settings" + Extentions[0]);
    }
    function SwitchLoopToGif() {
        LoopIcon.setAttribute("src", "Icons/loop"	+ Extentions[1]);
    }
	function SwitchLoopToPng() {
        LoopIcon.setAttribute("src", "Icons/loop" + Extentions[0]);
    }
	function SwitchPlaylistToGif() {
        PlaylistIcon.setAttribute("src", "Icons/playlist" + Extentions[1]);
    }
	function SwitchPlaylistToPng() {
        PlaylistIcon.setAttribute("src", "Icons/playlist" + Extentions[0]);
    }
	function SwitchShuffleToGif() {
        ShuffleIcon.setAttribute("src", "Icons/shuffle" + Extentions[1]);
    }
	function SwitchShuffleToPng() {
        ShuffleIcon.setAttribute("src", "Icons/shuffle" + Extentions[0]);
    }
});

function GetMusicProgress() {
	if (!isNaN(Music.duration)) {
		Progress = (Music.currentTime / Music.duration) * 100;
		ProgressBar.style.width = Progress + '%';
    }
}

function PlayMusic() {
	if (Music.paused) {
		Music.play();
	}
	else {
		Music.pause();
	}
}

function NextMusic() {
	OSTsIndex = (OSTsIndex + 1) % OSTs.length;
    UpdateMusic();
}

function PreviousMusic() {
	OSTsIndex = (OSTsIndex - 1 + OSTs.length) % OSTs.length;
    UpdateMusic();
}

function UpdateMusic() {
    Music.setAttribute('src', "Tracks/" + OSTs[OSTsIndex] + '.mp3');
	if (IconState == "pause") {
		Music.play();
	}
	else {
		Music.pause();
		GetMusicProgress();
	}
	
}

function MuteMusic() {
	Music.muted = !Music.muted;
}

function ExecuteOption() {
        if (OptionSelected == 'loop') {
            LoopMusic();
        }
		else if (OptionSelected == 'playlist') {
            ContinuePlaylist();
        }
		else if (OptionSelected == 'shuffle') {
            ShufflePlaylist();
        } 
}

function LoopMusic() {
        Music.play();
}

function ContinuePlaylist() {
        OSTsIndex = (OSTsIndex - 1 + OSTs.length) % OSTs.length;
        Music.setAttribute('src', "Tracks/" + OSTs[OSTsIndex] + '.mp3');
        Music.play();
}

function ShufflePlaylist() {
        do {
            OSTsIndex = Math.floor(Math.random() * OSTs.length);
        } while (OSTsPreviousIndex == OSTsIndex);
        OSTsPreviousIndex = OSTsIndex;
        Music.setAttribute('src', "Tracks/" + OSTs[OSTsIndex] + '.mp3');
        Music.play();
}