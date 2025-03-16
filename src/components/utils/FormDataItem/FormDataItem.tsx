import { FormDataType } from '../../../types/types';

export default function FormDataItem({ data }: { data: FormDataType }) {
  const { name, age, gender, email, country, password, file } = data;

  return (
    <>
      <div className="form-data-item" key={data.password as string}>
        <div className="form-data-item__image-container">
          <img src={file as string} alt="uploaded image" />
        </div>
        <p>
          <span>{`${name}`}</span>
          <span>{`${age} y.o. (${gender})`}</span>
        </p>
        <p>
          <span>Email: </span>
          <span>{`${email}`}</span>
        </p>
        <p>
          <span>Country: </span>
          <span>{`${country}`}</span>
        </p>
        <p>
          <span>Password: </span>
          <span>{`${password}`}</span>
        </p>
      </div>
    </>
  );
}
