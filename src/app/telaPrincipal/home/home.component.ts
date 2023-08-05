import { formatNumber, NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
    valor_1:number =0;
    valor_2:number =0;
    resultado:number =0;
    data:string=" ";
    mostra:Boolean =false;
    adicao:Boolean=false;
    subtracao:Boolean=false;
    multiplicacao:Boolean=false;
    divisao:Boolean=false;
    cal=false;
    cal1=false;
    cal2=false;
    cal3=false;
    mostra1:Boolean =false; mostra2:Boolean =false; mostra3:Boolean =false;
    date :string=" ";
    cont:number=0;
     mes:string=" ";
     dia:string=" ";
    verificar:number=0;
    resposta:string="";
    tabuad:number[]=[]
    desmotrar:number=0;
    teste:boolean=false
    frase:string="Começar";
    frase1:string="Começar";
    frase2:string="Começar";
    frase3:string="Começar";
    constructor(){


    }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  mostrar():Boolean{
    this.desmotrar=this.desmotrar+1;
    if((this.desmotrar%2)==0){
      this.mostra=false;
      this.frase="Calcular";
    }else{
      this.mostra=true;
      this.frase="Volta";
    }
   return this.mostra;

  }
  mostrar1():Boolean{
    this.desmotrar=this.desmotrar+1;
    if((this.desmotrar%2)==0){
      this.mostra1=false;
      this.frase1="Calcular";
    }else{
      this.mostra1=true;
      this.frase1="Volta";
    }
   return this.mostra1;

   }
   mostrar2():Boolean{
    this.desmotrar=this.desmotrar+1;
    if((this.desmotrar%2)==0){
      this.mostra2=false;
      this.frase2="Calcular";
    }else{
      this.mostra2=true;
      this.frase2="Volta";
    }
   return this.mostra2;

   }
   mostrar3():Boolean{
    this.desmotrar=this.desmotrar+1;
    if((this.desmotrar%2)==0){
      this.mostra3=false;
      this.frase3="Calcular";
    }else{
      this.mostra3=true;
      this.frase3="Volta";
    }
   return this.mostra3;

   }
  calcular(): any{
    if(this.adicao){
      this.cal=true;
      this.resultado = this.valor_1+this.valor_2;
      return this.resultado;
    }else if(this.subtracao){
      this.cal=true;
      this.resultado = this.valor_1-this.valor_2;
      return this.resultado;
    }else if(this.multiplicacao){
      this.cal=true;
      this.resultado = this.valor_1*this.valor_2;
      return this.resultado;
    }else if(this.divisao){
      this.cal=true;
      this.resultado = this.valor_1/this.valor_2;
      return this.resultado;
    }
  }
  calcularIdade():any{
      this.cal1=true;
      this.resultado = this.valor_1-this.valor_2;
      return this.resultado;
}
  estacao():any{
    this.cal2=true;
    this.cont=0;
    for(this.date of this.data){
      if(this.date!="-"){
        this.cont=1+this.cont;
        if(this.cont==5){
          this.mes=this.mes+this.date
        }
        if(this.cont==6){
          this.mes=this.mes+this.date

        }
        if(this.cont==7){
          this.dia=this.dia+this.date
        }
        if(this.cont==8){
          this.dia=this.dia+this.date
        }


      }

   }

   console.log(this.mes);
   console.log(this.dia);
   if(Number(this.dia)>=21){
    this.cont=1



   }

    if(Number(this.mes)>=1 && Number(this.mes)<=3){
      this.verificar=1;
   }
   else if(Number(this.mes)>3 && Number(this.mes)<=6){
    this.verificar=2;
   }
   else if(Number(this.mes)>6 && Number(this.mes)<=9){
    this.verificar=3;
   }
   else if(Number(this.mes)>9 && Number(this.mes)<=12){
    this.verificar=4;
   }
   if(this.verificar==1){
    this.resposta="Verão";
    if(this.cont==1 && Number(this.mes)==3){
      this.resposta="Outono";
    }
   }
   else if(this.verificar==2){
    this.resposta="Outono";
    if(this.cont==1 && Number(this.mes)==6){
      this.resposta="Inverno";
    }

   }
   else if(this.verificar==3){
    this.resposta="Inverno";
    if(this.cont==1 && Number(this.mes)==9){
      this.resposta="Primavera";
    }

   }
   else if(this.verificar==4 ){
    this.resposta="Primavera";
    if(this.cont==1 && Number(this.mes)==12){
      this.resposta="Verão";
    }

   }

  this.mes=" ";
  this.dia=" ";
   return this.resposta;
  }
  tabuada():any{
    this.cal3=true;
    for(var i=0;i<11;i++){
      this.tabuad[i]=this.valor_1*(i);


    }
  }
}
