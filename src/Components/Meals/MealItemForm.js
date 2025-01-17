import { useRef, useState } from "react";
import classes from "./MealItemForm.module.css";
import Input from "../UI/Input";

const MealItemForm = (props) => {
  const amountInputRef = useRef();
  const [amountisValid, setAmountIsValid] = useState(true);

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    setAmountIsValid(true);
    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        label="Amount"
        ref={amountInputRef}
        input={{
          id: props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: 1,
        }}
      />
      <button>+Add</button>
      {!amountisValid && <p>Amount Invalid.Please try again</p>}
    </form>
  );
};

export default MealItemForm;
