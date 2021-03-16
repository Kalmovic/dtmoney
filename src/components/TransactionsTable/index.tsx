import React from 'react';
import { Container } from './styles';

// import { Container } from './styles';

const TransactionsTable: React.FC = () => {
  return (
      <Container>
          <table>
              <thead>
                  <tr>
                      <th>Title</th>
                      <th>Value</th>
                      <th>Category</th>
                      <th>Date</th>
                  </tr>
              </thead>

              <tbody>
                  <tr>
                      <td>
                          Website development
                      </td>
                      <td className="deposit">R$12.000</td>
                      <td>Development</td>
                      <td>20/02/2021</td>
                  </tr>

                  <tr>
                      <td>
                          Transfer to pay rent
                      </td>
                      <td  className="withdrawal">R$1.000</td>
                      <td>Rent</td>
                      <td>01/02/2021</td>
                  </tr>
              </tbody>
          </table>
      </Container>
  );
}

export default TransactionsTable;