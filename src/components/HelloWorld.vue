 <template>
    <div>
      
      <label>First number:</label>
      <br>
      
      <input class="input1" v-model="firstNumber"/>
      <br>
      <label>second number:</label>
      <br>
      
      <span class="required" style="color: red">Not [0] if The operation is / OR %</span>
      <input class="input2" v-model="secondNumber"/>
      <label class="operationn">operation :</label>
      <select class="operation" v-model="operation">
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
        <option value="%">%</option>
      </select>
      <br>
      <button @click="calc">Calc</button>
      <h2 class="resultt">The Result is:</h2>
      <h2>{{ result  }}</h2>
    </div>
  </template>
  
  <script>
  
  export default {
    name: "HelloWorld",
    data(){
    return{
       firstNumber : '',
       secondNumber : '',
       operation : '',
       result : ''
          }
      },

      methods :{
        calc(){
           return this.result=eval(this.firstNumber+this.operation+this.secondNumber);
        }
      }
    
    };
    
  </script>

  
