import { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { PokemonContext } from '../../../context/PokemonContext';


const Formulario = () => {
  const { pokemon, updatePokemon } = useContext(PokemonContext);
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors }, reset } = useForm()
  const onSubmit = (data) => {
    // Aquí es donde puedes crear tu nuevo objeto
    const createdPokemon = [{
      order: '#new',
      sprites: {
        other: {dream_world: {
          front_default: data.image
        }}

      },
      weight: data.weight,
      height: data.height,
      types: [{
        type:{name: data.type}
      }
      ],
      name: data.name,
      moves: [{
        move:{name: data.move1}
      },
      {
        move:{name: data.move2}
      }
      ],
      stats:[{
        base_stat: 255
      },
      {
        base_stat: 255
      },
      {
        base_stat: 255
      },
      {
        base_stat: 255
      },
      {
        base_stat: 255
      },
      {
        base_stat: 255
      }
      ],
    }];

    reset()
    alert('Your Pokemon has been created!');

    console.log(createdPokemon)

    updatePokemon(() => {
      if (pokemon.length > 0) {
        return [...createdPokemon, ...pokemon];
      } else {
        return createdPokemon;
      }
    })

    navigate('/');

  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <input {...register("name", { required: 'This is required' })} type="text" placeholder="Name" />
      <p>{errors.name?.message}</p>

      <select {...register("type", { required: 'This is required' })}>
        <option value="normal">Normal</option>
        <option value="fighting">Fighting</option>
        <option value="flying">Flying</option>
        <option value="poison">Poison</option>
        <option value="ground">Ground</option>
        <option value="rock">Rock</option>
        <option value="bug">Bug</option>
        <option value="ghost">Ghost</option>
        <option value="steel">Steel</option>
        <option value="fire">Fire</option>
        <option value="water">Water</option>
        <option value="grass">Grass</option>
        <option value="electric">Electric</option>
        <option value="psychic">Psychic</option>
        <option value="ice">Ice</option>
        <option value="dragon">Dragon</option>
        <option value="dark">Dark</option>
        <option value="fairy">Fairy</option>
        <option value="unknown">Unknown</option>
        <option value="shadow">Shadow</option>
      </select>
      <p>{errors.type?.message}</p>

      <input {...register("weight", { required: 'This is required' })} type="number" placeholder="Weigth in Hg" />
      <p>{errors.weight?.message}</p>

      <input {...register("height", { required: 'This is required' })} type="number" placeholder="Height in Hg" />
      <p>{errors.height?.message}</p>

      <input {...register("move1", { required: 'This is required' })} type="text" placeholder="Move 1" />
      <p>{errors.moves?.message}</p>

      <input {...register("move2", { required: 'This is required' })} type="text" placeholder="Move 2" />
      <p>{errors.moves?.message}</p>

      <input {...register("image", { required: 'This is required' })} type="url" placeholder="Url of the image" />
      <p>{errors.moves?.message}</p>




      <input type="submit" />
    </form>
  )
}

export default Formulario;