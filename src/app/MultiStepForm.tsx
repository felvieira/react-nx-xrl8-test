import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { TrashIcon } from '@heroicons/react/solid';

interface FormData {
  startDate: Date | null;
  endDate: Date | null;
  valueType: string;
  amount: number;
}

const MultiStepForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData[]>([
    {
      startDate: null,
      endDate: null,
      valueType: 'fixed',
      amount: 0,
    },
  ]);

  const [errors, setErrors] = useState<string[]>([]);
  const [summaryVisible, setSummaryVisible] = useState(false);

  const handleInputChange = (
    index: number,
    field: keyof FormData,
    value: string | Date | number
  ) => {
    const updatedFormData = [...formData];
    updatedFormData[index] = {
      ...updatedFormData[index],
      [field]: value,
    };
    setFormData(updatedFormData);
    setErrors([]); // Limpa os erros ao corrigir os dados
  };

  const addLine = () => {
    setFormData((prevFormData) => [
      ...prevFormData,
      {
        startDate: null,
        endDate: null,
        valueType: 'fixed',
        amount: 0,
      },
    ]);
    setErrors([]); // Limpa os erros ao adicionar uma linha
  };

  const removeLine = (index: number) => {
    setFormData((prevFormData) => {
      const updatedFormData = [...prevFormData];
      updatedFormData.splice(index, 1);
      return updatedFormData;
    });
    setErrors([]); // Limpa os erros ao remover uma linha
  };

  const validateForm = () => {
    const validationErrors: string[] = [];

    formData.forEach((data, index) => {
      if (!data.startDate) {
        validationErrors.push(
          `A data de início da linha ${index + 1} está vazia.`
        );
      }

      if (!data.endDate) {
        validationErrors.push(
          `A data de término da linha ${index + 1} está vazia.`
        );
      }

      if (data.startDate && data.endDate && data.startDate > data.endDate) {
        validationErrors.push(
          `A data de início da linha ${
            index + 1
          } não pode ser maior que a data de término.`
        );
      }
    });

    setErrors(validationErrors);
    return validationErrors.length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      setSummaryVisible(true);
    }
  };

  return (
    <div className="flex w-screen justify-center items-center h-screen">
      <div className="w-3/4 p-6 bg-white shadow-md rounded-md">
        <form onSubmit={handleSubmit}>
          {formData.map((data, index) => (
            <div key={index} className="mb-4">
              <div className="flex">
                <div className="w-1/2 pr-2">
                  <label
                    htmlFor={`start-date-${index}`}
                    className="block text-sm font-medium text-gray-700"
                  >
                    Data de Início:
                  </label>
                  <div className="mt-1">
                    <DatePicker
                      id={`start-date-${index}`}
                      selected={data.startDate}
                      onChange={(date) =>
                        handleInputChange(index, 'startDate', date)
                      }
                      dateFormat="dd/MM/yyyy"
                      placeholderText="Selecione a data"
                      className="w-full border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 rounded-md shadow-sm"
                    />
                  </div>
                </div>
                <div className="w-1/2 pl-2">
                  <label
                    htmlFor={`end-date-${index}`}
                    className="block text-sm font-medium text-gray-700"
                  >
                    Data de Término:
                  </label>
                  <div className="mt-1">
                    <DatePicker
                      id={`end-date-${index}`}
                      selected={data.endDate}
                      onChange={(date) =>
                        handleInputChange(index, 'endDate', date)
                      }
                      dateFormat="dd/MM/yyyy"
                      placeholderText="Selecione a data"
                      className="w-full border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 rounded-md shadow-sm"
                    />
                  </div>
                </div>
                <div className="w-1/2 pr-2">
                  <label
                    htmlFor={`value-type-${index}`}
                    className="block text-sm font-medium text-gray-700"
                  >
                    Tipo de Valor:
                  </label>
                  <select
                    id={`value-type-${index}`}
                    value={data.valueType}
                    onChange={(e) =>
                      handleInputChange(index, 'valueType', e.target.value)
                    }
                    className="mt-1 block w-full border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 rounded-md shadow-sm"
                  >
                    <option value="fixed">Fixo</option>
                    <option value="percentage">Porcentagem</option>
                  </select>
                </div>
                <div className="w-1/2 pl-2">
                  <label
                    htmlFor={`amount-${index}`}
                    className="block text-sm font-medium text-gray-700"
                  >
                    Valor:
                  </label>
                  <input
                    type="number"
                    id={`amount-${index}`}
                    value={data.amount}
                    onChange={(e) =>
                      handleInputChange(index, 'amount', Number(e.target.value))
                    }
                    className="mt-1 block w-full border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 rounded-md shadow-sm"
                  />
                </div>
                {formData.length > 1 && (
                  <button
                    type="button"
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                    onClick={() => removeLine(index)}
                  >
                    <TrashIcon className="h-5 w-5 inline-block" />
                  </button>
                )}
              </div>
              <hr className="my-4" />
            </div>
          ))}
          <div className="action flex justify-end">
            <button
              type="button"
              className="bg-blue-500 hover:bg-blue-600  text-white font-bold py-2 px-4 rounded"
              onClick={addLine}
            >
              Adicionar Linha
            </button>
            <button
              type="submit"
              className="bg-green-500 hover:bg-green-600  text-white font-bold py-2 px-4 rounded ml-2"
            >
              Salvar
            </button>
          </div>

          {errors.length > 0 && (
            <div className="mt-4">
              {errors.map((error, index) => (
                <p key={index} className="text-red-500">
                  {error}
                </p>
              ))}
            </div>
          )}
        </form>
        {summaryVisible && (
          <div className="mt-6">
            <h2 className="text-lg font-medium text-gray-900 mb-2">
              Resumo dos dados:
            </h2>
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b-2 border-gray-300">
                    Data de Início
                  </th>
                  <th className="py-2 px-4 border-b-2 border-gray-300">
                    Data de Término
                  </th>
                  <th className="py-2 px-4 border-b-2 border-gray-300">
                    Tipo de Valor
                  </th>
                  <th className="py-2 px-4 border-b-2 border-gray-300">
                    Valor
                  </th>
                </tr>
              </thead>
              <tbody>
                {formData.map((data, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? 'bg-gray-100' : ''}
                  >
                    <td className="py-2 px-4 border-b border-gray-300">
                      {data.startDate?.toLocaleDateString()}
                    </td>
                    <td className="py-2 px-4 border-b border-gray-300">
                      {data.endDate?.toLocaleDateString()}
                    </td>
                    <td className="py-2 px-4 border-b border-gray-300">
                      {data.valueType}
                    </td>
                    <td className="py-2 px-4 border-b border-gray-300">
                      {data.amount}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="button-container flex justify-center  mt-4">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Completar envio do formulário
              </button>
              <button
                onClick={() => setSummaryVisible(false)}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded ml-2"
              >
                Voltar e editar as escolhas
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MultiStepForm;
