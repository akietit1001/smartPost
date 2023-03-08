const Validator = (options) => {

  const selectorRules = {};
  
  const validate = (inputElement, rule) => {
    const errorElement = inputElement.parentElement.querySelector(options.errorSelector)
    var errorMessage;

    const rules = selectorRules[rule.selector];

    for(let i = 0; i < rules.length; i++) {
      errorMessage = rules[i](inputElement.value)
      if(errorMessage) break;
    }
          if(errorMessage) {
            errorElement.innerText = errorMessage;
            inputElement.classList.add('invalid')
          } else {
            errorElement.innerText = '';
            inputElement.classList.remove('invalid')
          }
  }
  const formElement = document.querySelector(options.form);
  if(formElement) {

    formElement.onsubmit = function(e) {
      e.preventDefault();

      options.rules.forEach((rule)=> {
        const inputElement = formElement.querySelector(rule.selector);
        validate(inputElement, rule)
      })
    }


    options.rules.forEach((rule)=>{
      if(Array.isArray(selectorRules[rule.selector])) {
        selectorRules[rule.selector].push(rule.test)
      } else {
        selectorRules[rule.selector] = [rule.test]
      }
      const inputElement = formElement.querySelector(rule.selector);
      if(inputElement) {
        inputElement.onblur = () => {
          validate(inputElement, rule)
        }

        inputElement.oninput = () => {
          const errorElement = inputElement.parentElement.querySelector(options.errorSelector)
          errorElement.innerText = '';
          inputElement.classList.remove('invalid');
        }
      }
    })
  }
}

Validator.isRequired = function(selector, message){
  return {
    selector: selector,
    test: function (value) {
      return value.trim() ? undefined : message
    }
  };
}

Validator.isEmail = function(selector, message){
  return {
    selector: selector,
    test: function (value) {
      const regex = /^\S+@\S+\.\S+$/;
      return regex.test(value) ? undefined : message
    }
  };
}

Validator.isConfirmed = function(selector, getConfirmValue, message) {
  return {
    selector: selector,
    test: function(value) {
      return value === getConfirmValue() ? undefined : message
    }
  }
}


export default Validator;