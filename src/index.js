class SmartCalculator {

  constructor(initialValue) {
    if (isFinite(initialValue)) {
        this.output = ''+initialValue;
        this.value = eval(this.output);
      }
  }

  valueOf() {
    return this.value;
  }

  add(number) {
    if (isFinite(number)) {
        this.output += ' + '+number;
        this.value = eval(this.output);
        return this;
      }
  }
  
  subtract(number) {
    if (isFinite(number)) {
        this.output += ' - '+number;
        this.value = eval(this.output);
        return this;
      }
  }

  multiply(number) {
    if (isFinite(number)) {
        this.output += ' * '+number;
        this.value = eval(this.output);
        return this;
      }
  }

  devide(number) {
    if (isFinite(number)) {
        this.output += ' / '+number;
        this.value = eval(this.output);
        return this;
      }
  }

  pow(number) {
    if (isFinite(number)) {
        let arr = this.output.split(' ');
        let newString = '';
        let i = arr.length - 1;
        while (!isFinite(arr[i])) i--;
    
        if (isFinite(arr[i])) arr[i] = 'Math.pow('+arr[i]+', '+number+' )';
        arr.forEach((x)=> newString+=x);
        this.output = newString;
        this.value = eval(this.output);
        return this;
      }
  }
}

module.exports = SmartCalculator;
