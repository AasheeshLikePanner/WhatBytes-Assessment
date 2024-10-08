import React from 'react';
import { useForm } from 'react-hook-form';

const UpdateDataForm = ({ onSubmit }:any) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmitHandler = (data:any) => {
    if (data.currentScore > 15) {
      alert("Current score cannot exceed 15.");
      return;
    }

    onSubmit({
      rank: parseInt(data.rank),
      score: parseInt(data.score),
      currentScore: parseInt(data.currentScore),
    });

    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmitHandler)} className="fixed z-99 w-full max-w-md mx-auto p-4 shadow-md bg-white rounded-lg space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700">Rank</label>
        <input
          type="number"
          {...register('rank', { required: true })}
          className={`mt-1 block w-full p-2 border border-gray-300 rounded-md ${
            errors.rank ? 'border-red-500' : ''
          }`}
        />
        {errors.rank && <span className="text-red-500 text-sm">Rank is required.</span>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Percentile</label>
        <input
          type="number"
          {...register('score', { required: true })}
          className={`mt-1 block w-full p-2 border border-gray-300 rounded-md ${
            errors.score ? 'border-red-500' : ''
          }`}
        />
        {errors.score && <span className="text-red-500 text-sm">percentile is required.</span>}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">Current Score (Out of 15)</label>
        <input
          type="number"
          {...register('currentScore', { required: true, max: 15 })}
          className={`mt-1 block w-full p-2 border border-gray-300 rounded-md ${
            errors.currentScore ? 'border-red-500' : ''
          }`}
        />
        {errors.currentScore && (
          <span className="text-red-500 text-sm">
            {errors.currentScore.type === 'max'
              ? 'Current score cannot exceed 15.'
              : 'Current score is required.'}
          </span>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Update
      </button>
    </form>
  );
};

export default UpdateDataForm;
