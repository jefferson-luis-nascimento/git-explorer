import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { Title, Form, Repositories } from './styles';

import logo from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="GithubExploreer" />
      <Title>Explore repositórios do Github</Title>
      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/54360448?s=460&u=8b60ecb729e1d86ac830f17e051887237f1770f7&v=4"
            alt="Jefferson Luís Nasimento"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>
              Projeto final do bootcamp da Rocketseat. No projeto foi feito o
              backend, o frontend-web e o mobile.
            </p>
          </div>
          <FiChevronRight size={40} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/54360448?s=460&u=8b60ecb729e1d86ac830f17e051887237f1770f7&v=4"
            alt="Jefferson Luís Nasimento"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>
              Projeto final do bootcamp da Rocketseat. No projeto foi feito o
              backend, o frontend-web e o mobile.
            </p>
          </div>
          <FiChevronRight size={40} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/54360448?s=460&u=8b60ecb729e1d86ac830f17e051887237f1770f7&v=4"
            alt="Jefferson Luís Nasimento"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>
              Projeto final do bootcamp da Rocketseat. No projeto foi feito o
              backend, o frontend-web e o mobile.
            </p>
          </div>
          <FiChevronRight size={40} />
        </a>
        <a href="teste">
          <img
            src="https://avatars2.githubusercontent.com/u/54360448?s=460&u=8b60ecb729e1d86ac830f17e051887237f1770f7&v=4"
            alt="Jefferson Luís Nasimento"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>
              Projeto final do bootcamp da Rocketseat. No projeto foi feito o
              backend, o frontend-web e o mobile.
            </p>
          </div>
          <FiChevronRight size={40} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
