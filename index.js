class chatlinks {
    constructor(mod, chatlist, blocking, reruncommand) {
        if (!chatlist) return
        this.arrlist = []
        this.cmdlist = {}
        this.chatlist = chatlist
        for (let i = 0; i < this.chatlist.length; i++) {
            this.addchatbutton(this.chatlist[i])
        }
        mod.hook('C_REQUEST_NONDB_ITEM_INFO', '*', (e) => {
            if (this.cmdlist[e.item]) {
                process.nextTick(() => { mod.command.exec(this.cmdlist[e.item]) })
                if (blocking) mod.hookOnce('S_PRIVATE_CHAT', '*', { filter: { fake: true } }, (e) => { return false })
                setTimeout(() => { if (reruncommand) mod.command.exec(reruncommand) }, 5)
                return false
            }
        })
    }

    printlist() {
        this.arrlist = []
        for (let i = 0; i < this.chatlist.length; i++) {
            this.addchatbutton(this.chatlist[i])
        }
        return this.arrlist.join('\n')
    }

    addchatbutton(arg) {
        this.cmdlist[arg[4]] = arg[5]
        this.arrlist.push(`<FONT color=\"${arg[1]}\">${arg[0]}</FONT><FONT color=\"${arg[3]}\"><ChatLinkAction param=\"1#####${arg[4]}@-1@Supreme\">[${arg[2]}]</ChatLinkAction></FONT>`)
    }
}

module.exports = chatlinks;