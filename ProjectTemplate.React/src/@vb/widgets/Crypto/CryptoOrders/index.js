import React, { useState } from 'react'
import { Table, Form, Radio, Input, Select } from 'antd'
import styles from './style.module.scss'

const ordersSellColumns = [
  {
    title: 'SUM',
    dataIndex: 'sum',
    key: 'sum',
    align: 'right',
  },
  {
    title: 'Total',
    dataIndex: 'total',
    key: 'total',
    align: 'right',
  },
  {
    title: 'Size',
    dataIndex: 'size',
    key: 'size',
    align: 'right',
  },
  {
    title: 'BID',
    dataIndex: 'bid',
    key: 'bid',
    width: 120,
    align: 'right',
    render: (value) => <span style={{ color: '#00a45b' }}>{value}</span>,
  },
  {
    title: '',
    dataIndex: 'sell',
    key: 'sell',
    width: 60,
    align: 'right',
    render: () => (
      <a href="#" className="utils__link--blue mr-2">
        <strong>SELL</strong>
      </a>
    ),
  },
]

const ordersBuyColumns = [
  {
    title: '',
    dataIndex: 'sell',
    key: 'sell',
    width: 60,
    render: () => (
      <a href="#" className="utils__link--blue ml-2">
        <strong>BUY</strong>
      </a>
    ),
  },
  {
    title: 'ASK',
    dataIndex: 'ask',
    key: 'ask',
    width: 120,
    render: (value) => <span style={{ color: '#f75535' }}>{value}</span>,
  },
  {
    title: 'Size',
    dataIndex: 'size',
    key: 'size',
  },
  {
    title: 'Total',
    dataIndex: 'total',
    key: 'total',
  },
  {
    title: 'SUM',
    dataIndex: 'sum',
    key: 'sum',
  },
]

const orderBookBuy = [
  {
    key: 1,
    sum: '3.3187',
    total: '3.0801',
    size: '479.021',
    ask: '0.00643000',
  },
  {
    key: 2,
    sum: '2.3187',
    total: '3.3536',
    size: '236.021',
    ask: '0.00267789',
  },
  {
    key: 3,
    sum: '3.3187',
    total: '3.3267',
    size: '236.021',
    ask: '0.00643670',
  },
  {
    key: 4,
    sum: '4.3187',
    total: '3.24727',
    size: '637.021',
    ask: '0.00267000',
  },
  {
    key: 5,
    sum: '5.3187',
    total: '3.272',
    size: '15.021',
    ask: '0.00333000',
  },
  {
    key: 6,
    sum: '6.3187',
    total: '3.2727',
    size: '62.021',
    ask: '0.00643667',
  },
  {
    key: 7,
    sum: '7.3187',
    total: '3.4778',
    size: '23.021',
    ask: '0.00647873',
  },
  {
    key: 8,
    sum: '5.3187',
    total: '3.8549',
    size: '2356.021',
    ask: '0.00643478',
  },
  {
    key: 9,
    sum: '9.3187',
    total: '3.35738',
    size: '125.021',
    ask: '0.00477000',
  },
  {
    key: 10,
    sum: '10.3187',
    total: '3.37',
    size: '234.021',
    ask: '0.00236000',
  },
  {
    key: 11,
    sum: '11.3187',
    total: '3.3883',
    size: '456.021',
    ask: '0.00674440',
  },
  {
    key: 12,
    sum: '5.3187',
    total: '3.8549',
    size: '2356.021',
    ask: '0.00643478',
  },
  {
    key: 13,
    sum: '9.3187',
    total: '3.35738',
    size: '125.021',
    ask: '0.00477000',
  },
  {
    key: 14,
    sum: '10.3187',
    total: '3.37',
    size: '234.021',
    ask: '0.00236000',
  },
  {
    key: 15,
    sum: '11.3187',
    total: '3.3883',
    size: '456.021',
    ask: '0.00674440',
  },
]

const orderBookSell = [
  {
    key: 1,
    sum: '3.3187',
    total: '3.0801',
    size: '479.021',
    bid: '0.00643000',
  },
  {
    key: 2,
    sum: '2.3187',
    total: '3.3536',
    size: '236.021',
    bid: '0.00267789',
  },
  {
    key: 3,
    sum: '3.3187',
    total: '3.3267',
    size: '236.021',
    bid: '0.00643670',
  },
  {
    key: 4,
    sum: '4.3187',
    total: '3.24727',
    size: '637.021',
    bid: '0.00267000',
  },
  {
    key: 5,
    sum: '5.3187',
    total: '3.272',
    size: '15.021',
    bid: '0.00333000',
  },
  {
    key: 6,
    sum: '6.3187',
    total: '3.2727',
    size: '62.021',
    bid: '0.00643667',
  },
  {
    key: 7,
    sum: '7.3187',
    total: '3.4778',
    size: '23.021',
    bid: '0.00647873',
  },
  {
    key: 8,
    sum: '5.3187',
    total: '3.8549',
    size: '2356.021',
    bid: '0.00643478',
  },
  {
    key: 9,
    sum: '9.3187',
    total: '3.35738',
    size: '125.021',
    bid: '0.00477000',
  },
  {
    key: 10,
    sum: '10.3187',
    total: '3.37',
    size: '234.021',
    bid: '0.00236000',
  },
  {
    key: 11,
    sum: '11.3187',
    total: '3.3883',
    size: '456.021',
    bid: '0.00674440',
  },
  {
    key: 12,
    sum: '5.3187',
    total: '3.8549',
    size: '2356.021',
    bid: '0.00643478',
  },
  {
    key: 13,
    sum: '9.3187',
    total: '3.35738',
    size: '125.021',
    bid: '0.00477000',
  },
  {
    key: 14,
    sum: '10.3187',
    total: '3.37',
    size: '234.021',
    bid: '0.00236000',
  },
  {
    key: 15,
    sum: '11.3187',
    total: '3.3883',
    size: '456.021',
    bid: '0.00674440',
  },
]

const CryptoOrder = () => {
  const [orderType, setOrderType] = useState('buy')

  const toggleOrderType = (e) => {
    setOrderType(e.target.value)
  }

  return (
    <div>
      <div className="row">
        <div className="col-md-4">
          <div className="table-responsive text-nowrap">
            <Table
              columns={ordersSellColumns}
              dataSource={orderBookSell}
              pagination={{ position: 'bottom' }}
              size="small"
            />
          </div>
        </div>
        <div className="col-md-4">
          <Form layout="vertical">
            <Form.Item>
              <Radio.Group onChange={toggleOrderType} value={orderType} style={{ width: '100%' }}>
                <Radio.Button value="buy" style={{ width: '50%', textAlign: 'center' }}>
                  BUY
                </Radio.Button>
                <Radio.Button value="sell" style={{ width: '50%', textAlign: 'center' }}>
                  SELL
                </Radio.Button>
              </Radio.Group>
            </Form.Item>
            {orderType === 'buy' && (
              <div>
                <span className={styles.formLabel}>ORDER TYPE</span>
                <Form.Item>
                  <Select defaultValue="limit">
                    <Select.Option value="limit">Limit (Default)</Select.Option>
                    <Select.Option value="conditional">Conditional</Select.Option>
                  </Select>
                </Form.Item>
                <span className={styles.formLabel}>QUANTITY (BTC)</span>
                <Form.Item>
                  <Input defaultValue="0.00000000" />
                </Form.Item>
                <span className={styles.formLabel}>BID PRICE</span>
                <Form.Item>
                  <Input defaultValue="0.00645198" />
                </Form.Item>
                <span className={styles.formLabel}>TOTAL</span>
                <Form.Item>
                  <Input defaultValue="0.00000000" />
                </Form.Item>
                <span className={styles.formLabel}>TIME IN FORCE</span>
                <Form.Item>
                  <Select defaultValue="good">
                    <Select.Option value="good">Good &#39;Til Cancelled (Default)</Select.Option>
                    <Select.Option value="immediate">Immediate or Cancel</Select.Option>
                  </Select>
                </Form.Item>
                <div className="btn btn-success" style={{ width: '100%' }}>
                  <strong>BUY BTC</strong>
                </div>
                <div className="my-3 text-center">
                  <div>
                    <strong>Available Balance</strong>
                  </div>
                  <div>12.92520000 BTC</div>
                  <div>1450.00 USD</div>
                  <div>
                    <a href="#" className="utils__link--blue utils__link--underlined">
                      <strong>Max Buy</strong>
                    </a>
                  </div>
                </div>
              </div>
            )}
            {orderType === 'sell' && (
              <div>
                <span className={styles.formLabel}>ORDER TYPE</span>
                <Form.Item>
                  <Select defaultValue="limit">
                    <Select.Option value="limit">Limit (Default)</Select.Option>
                    <Select.Option value="conditional">Conditional</Select.Option>
                  </Select>
                </Form.Item>
                <span className={styles.formLabel}>QUANTITY (BTC)</span>
                <Form.Item>
                  <Input defaultValue="0.00000000" />
                </Form.Item>
                <span className={styles.formLabel}>ASK PRICE</span>
                <Form.Item>
                  <Input defaultValue="0.00645198" />
                </Form.Item>
                <span className={styles.formLabel}>TOTAL</span>
                <Form.Item>
                  <Input defaultValue="0.00000000" />
                </Form.Item>
                <span className={styles.formLabel}>TIME IN FORCE</span>
                <Form.Item>
                  <Select defaultValue="good">
                    <Select.Option value="good">Good &#39;Til Cancelled (Default)</Select.Option>
                    <Select.Option value="immediate">Immediate or Cancel</Select.Option>
                  </Select>
                </Form.Item>
                <div className="btn btn-danger" style={{ width: '100%' }}>
                  <strong>SELL BTC</strong>
                </div>
                <div className="my-3 text-center">
                  <div>
                    <strong>Available Balance</strong>
                  </div>
                  <div>12.92520000 BTC</div>
                  <div>1450.00 USD</div>
                  <div>
                    <a href="#" className="utils__link--blue utils__link--underlined">
                      <strong>Max SELL</strong>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </Form>
        </div>
        <div className="col-md-4">
          <div className="table-responsive text-nowrap">
            <Table
              columns={ordersBuyColumns}
              dataSource={orderBookBuy}
              pagination={{ position: 'bottom' }}
              size="small"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CryptoOrder
