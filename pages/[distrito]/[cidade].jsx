import axios from 'axios'
import LayoutDefault from '../../layouts/LayoutDefault';
import { formattedKebabCase } from '../../helpers/fonts'

export default function Cidade({ responseCidade, responseDistrito }) {
  return(
    <LayoutDefault title={formattedKebabCase(responseCidade.cidade)}>
      Nome do distrito: {JSON.stringify(responseDistrito.distrito)} <br />
      Nome da cidade: {responseCidade.cidade}
    </LayoutDefault>
  )
}

export const getStaticProps = async ({params}) => {
  const distrito = await (await axios.get(`http://localhost:3000/api/distritos/${params.distrito}`)).data;
  const cidades = await (await axios.get(`http://localhost:3000/api/distritos/${params.distrito}/${params.cidade}`)).data;
  const responseCidade = cidades;
  const responseDistrito = distrito;
  return {
    props: {
      responseCidade,
      responseDistrito
    },
  };
};

export const getStaticPaths = async () => {
  const { data } = await axios.get(`http://localhost:3000/api/distritos`);
  const paths = data.map((distrito) => {
    return(
      distrito.cidades.map((item) => {
        return{
          params: {
            distrito: distrito.distrito.toString(),
            cidade: item.cidade.toString()
          }
        }
      })
    )
  }).flat();

  return {
    paths,
    fallback: false,
  };
};