{
var CLIP_TO_WEAPON = {
    "Pistol" : "0xFED0FD71", 
    "Combat Pistol" : "0x721B079", 
    "AP Pistol" : "0x31C4B22A", 
    "Pistol .50" : "0x2297BE19", 
    "Heavy Revolver" : "0xE9867CE3", 
    "SNS Pistol" :  "0xF8802ED9", 
    "Heavy Pistol" : "0xD4A969A", 
    "SNS Pistol Mk II" : "0x1466CE6", 
    "Pistol Mk II" : "0x94F42D62", 
    "Vintage Pistol" : "0x45A3B6BB", 
    "Ceramic Pistol" : "0x54D41361", 
    "Micro SMG" : "0xCB48AEF0", 
    "SMG" : "0x26574997", 
    "Assault SMG" : "0x8D1307B0",
    "Mini SMG" : "0x84C8B2D3", 
    "SMG Mk II" : "0x4C24806E", 
    "Machine Pistol" : "0x476E85FF", 
    "Combat PDW" : "0x4317F19E", 
    "Assault Shotgun" : "0x94E81BC7", 
    "Heavy Shotgun" : "0x324F2D5F", 
    "Assault Rifle" : "0xBE5EEA16", 
    "Carbine Rifle" : "0x9FBE33EC", 
    "Advanced Rifle" : "0xFA8FA10F", 
    "Special Carbine" : "0xC6C7E581", 
    "Bullpup Rifle" : "0xC5A12F80", 
    "Bullpup Rifle Mk II" : "0x18929DA",
    "Special Carbine Mk II" : "0x16C69281", 
    "Assault Rifle Mk II" : "0x8610343F", 
    "Carbine Rifle Mk II" : "0x4C7A391E", 
    "Compact Rifle" : "0x513F0A63", 
    "Military Rifle" : "0x2D46D83B", 
    "MG" : "0xF434EF84", 
    "Combat MG" : "0xE1FFB34A",
    "Combat MG Mk II" : "0x492B257C", 
    "Gusenberg Sweeper" : "0x1CE5A6A5", 
    "Sniper Rifle" : "0x9BC64089", 
    "Heavy Sniper" : "0x476F52F4",
    "Marksman Rifle Mk II" : "0x94E12DCE", 
    "Heavy Sniper Mk II" : "0xFA1E1A28", 
    "Marksman Rifle" : "0xD83B4141", 
    "Grenade Launcher" : "0x11AE5C97",
}

function getClipHash(weapon){
    if (typeof weapon !== "string") return 
    return parseInt(CLIP_TO_WEAPON[weapon.trimLeft()])
}
}