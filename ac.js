class mclanchealegre{
    #mclanchealegre;
    constructor(mclanchealegre, cocaglue, batatapequena, batatamedia){ 
        this.mclanchealegre = mclanchealegre
        this.comboalegre = comboalegre
        this.batatamedia = batatamedia
        this.batatapequena = batatapequena
        this.fruta = fruta
    }

    combo(){
        if(comboalegre === true) {
            this.mclanchealegre + this.batatamedia + this.fruta
        }
        else(comboalegre == false) {
            this.mclanchealegre
        }
    }

}

class biglanche{
    #biglanche;
    constructor(mclanchealegre, biglanche, mchem, cocaglue, batatapequena, batatamedia){
        this.biglanche = biglanche;
        this.batatamedia = batatamedia
        this.batatapequena = batatapequena
        this.cocaglue = cocaglue
        this.combobig = combobig
    }

    combo2(){
        if(combobig === true) {
            this.biglanche + this.batatamedia + this.cocaglue
        }
        else(comboalegre == false) {
            this.biglanche
        }
    }
}

class mchen{
    #mchen;
    constructor(mchen, cocaglue, batatapequena, batatamedia){
        this.mchen = mchen;
        this.batatamedia = batatamedia
        this.batatapequena = batatapequena
        this.cocaglue = cocaglue
    }

    combo3(){
        if(combobig === true) {
            this.mchen + this.batatamedia + this.cocaglue
        }
        else(comboalegre == false) {
            this.mchen
        }
    }
}