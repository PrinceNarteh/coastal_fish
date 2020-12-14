import styled from "styled-components";

const Input = ({ type, label, as, ...props }) => {
  return (
    <InputStyled>
      <label class="custom-field one">
        {as === "textarea" ? (
          <textarea
            name=""
            id=""
            cols="30"
            rows="5"
            placeholder="Write your message..."
          ></textarea>
        ) : (
          <>
            <input type={type || "text"} {...props} required />
            <span class="placeholder">{label}</span>
          </>
        )}
      </label>
    </InputStyled>
  );
};

const InputStyled = styled.div`
  .custom-field {
    position: relative;
    font-size: 1.6rem;
    padding-top: 20px;
    margin: 2rem 0;
  }

  .custom-field input,
  .custom-field textarea {
    border: none;
    -webkit-appearance: none;
    -ms-appearance: none;
    -moz-appearance: none;
    appearance: none;
    outline: none;
    background: #f2f2f2;
    padding: 1rem;
    border-radius: 0.5rem;
    font-size: 1.6rem;
    width: 100%;
    margin-bottom: 2rem;
    color: #777;
  }

  .custom-field .placeholder {
    position: absolute;
    left: 12px;
    top: calc(50% + 10px);
    transform: translateY(-50%);
    color: #aaa;
    transition: top 0.3s ease, color 0.3s ease, font-size 0.3s ease;
  }

  .custom-field input:valid + .placeholder,
  .custom-field textarea:valid + .placeholder,
  .custom-field
    input:focus
    + .placeholder
    .custom-field
    textarea:focus
    + .placeholder {
    top: 1rem;
    font-size: 1rem;
    color: #222;
  }

  /* ONE */
  .custom-field.one input,
  .custom-field.one textarea {
    background: none;
    border: 2px solid #ddd;
    transition: border-color 0.3s ease;
  }

  .custom-field.one input + .placeholder {
    left: 8px;
    padding: 0 5px;
  }

  .custom-field.one input:valid,
  .custom-field.one input:focus {
    border-color: #777;
    transition-delay: 0.1s;
  }

  .custom-field.one input:valid + .placeholder,
  .custom-field.one input:focus + .placeholder {
    top: 1rem;
    font-size: 1.2rem;
    color: #222;
    background: #fff;
  }
`;

export default Input;
