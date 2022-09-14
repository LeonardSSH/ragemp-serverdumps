{

let CEF = null 

mp.events.add("Book::Submit", (text) =>{
	mp.events.callRemote("Book::Submit", text)
})


mp.events.add("Book::Receive", (text) =>{
	if (!mp.browsers.exists(CEF))
		CEF = mp.browsers.new("package://gtalife/Book/CEF/index.html");

	mp.events.call('setCefActive', true);
	mp.game.graphics.notify("Use ~b~F4~w~ to close the book.");
	mp.gui.cursor.show(true, true)
	mp.gui.chat.activate(false)
	CEF.execute("setText('" + text + "')")
})

mp.keys.bind(0x73, true, ()=>{
	if (!mp.browsers.exists(CEF)) return 
	CEF.destroy()
	CEF = null
	mp.gui.cursor.show(false, false)
	mp.gui.chat.activate(true)
})
}