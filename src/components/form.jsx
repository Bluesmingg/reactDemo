/**
 * 法人治理结构页面
 */
import { Button, Form, Input, InputNumber, notification, Popconfirm, Table } from 'antd';
import { useEffect, useMemo, useState } from 'react';
const FormContent = (props) => {
  const { initValues, isAdd, view, dicUseModule } = props;
  const formData = Form.useForm();
  const [dataSource, setDataSource] = useState([]);
  // 无数据时，列表项添加默认字段
  const tempListData = {
    directorate: [
      {
        planCapitalTime: '',
        capitalTotalAmount: '',
        capitalRaiseAmount: '',
        dicCapitalType: '',
        capitalReason: ''
      }
    ],
    supervisors: [
      {
        planCapitalTime: '',
        capitalTotalAmount: '',
        capitalRaiseAmount: '',
        dicCapitalType: '',
        capitalReason: ''
      }
    ],
    manage: [
      {
        planCapitalTime: '',
        capitalTotalAmount: '',
        capitalRaiseAmount: '',
        dicCapitalType: '',
        capitalReason: ''
      }
    ]
  };

  let delObj = {
    title: '操作',
    dataIndex: 'operate',
    fixed: 'center',
    width: 50,
    ctrlCol: true,
    render(text, field, index) {
      return (
        <>
          <Popconfirm title="确定删除?">
            <Button danger type="text">
              删除
            </Button>
          </Popconfirm>
        </>
      );
    }
  };
  let addObj = {
    title: '新增',
    fixed: 'center',
    width: 50,
    render(text, field, index) {
      return <Button type="primary">新增</Button>;
    }
  };

  useEffect(() => {
    formData.setFieldValue('initiateCorporationList', []);
    initCapitalIncreaseList();
    if (initValues?.priId) {
    }
  }, [initValues]);

  const initCapitalIncreaseList = () => {
    // if (!initiateCorporationList.length) {
    //   initCapitalIncreaseList2(initiateCorporationList);
    // }
  };

  const initCapitalIncreaseList2 = (initiateCorporationList) => {
    // formData.setFieldsValue({ initiateCorporationList });
  };

  const columns = [
    {
      title: '序号',
      dataIndex: 'corporationId',
      render(text, field, index) {
        return (
          <Form.Item style={{ marginBottom: 0, textAlign: 'center' }} name={[index, 'corporationId']}>
            {index + 1}
          </Form.Item>
        );
      },
      width: 50
    },
    {
      title: '人员名称',
      dataIndex: 'name',
      render(text, field, index) {
        return (
          <Form.Item style={{ marginBottom: 0 }} name={[index, 'name']}>
            <Input />
          </Form.Item>
        );
      },
      width: 180
    },
    {
      title: '职务',
      dataIndex: 'position',
      render(text, field, index) {
        return (
          <Form.Item style={{ marginBottom: 0 }} name={[index, 'position']}>
            <Input style={{ width: '100%' }} />
          </Form.Item>
        );
      },
      width: 220
    },
    {
      title: '任职开始时间',
      dataIndex: 'positionStartTime',
      render(text, field, index) {
        return (
          <Form.Item style={{ marginBottom: 0 }} name={[index, 'positionStartTime']}>
            <Input style={{ width: '100%' }} />
          </Form.Item>
        );
      },
      width: 220
    },
    {
      title: '任职结束时间',
      dataIndex: 'positionEndTime',
      render(text, field, index) {
        return (
          <Form.Item style={{ marginBottom: 0 }} name={[index, 'positionEndTime']}>
            <Input style={{ width: '100%' }} />
          </Form.Item>
        );
      },
      width: 220
    }
  ];
  // 包装列表，添加增加删除按钮
  const packageColumns = useMemo(() => {
    columns.unshift(addObj);
    columns.push(delObj);
    return columns;
  }, []);

  const dispatchTypeList = useMemo(() => {
    // 向列表项头尾添加操作按钮
    // columns.unshift(addObj);
    // columns.push(delObj);
    // const dispatchList = corporateRes.reduce((acc, cur, index) => {
    //   if (cur.type === 0) {
    //   }
    //   if (cur.type === 1) {
    //   }
    //   if (cur.type === 2) {
    //   }
    //   return acc;
    // }, { directorate: [], supervisors: [], manage: [] })
    // return dispatchList
  }, []);

  return (
    <>
      <div style={{ fontSize: '16px', height: 'auto', overflow: 'auto' }}>
        <Form form={formData}>
          <Form.Item>
            <Form.List name="initiateCorporationList">
              {(fields, operation) => {
                return (
                  <Table
                    size="small"
                    bordered
                    dataSource={dataSource}
                    // columns={dispatchTypeList.directorate}
                    columns={columns}
                    pagination={false}
                  />
                );
              }}
            </Form.List>
          </Form.Item>
          <Form.Item>
            <Form.List name="initiateCorporationList">
              {(fields, operation) => {
                return (
                  <Table
                    size="small"
                    bordered
                    dataSource={dataSource}
                    // columns={dispatchTypeList.supervisors}
                    columns={columns}
                    pagination={false}
                  />
                );
              }}
            </Form.List>
          </Form.Item>
          <Form.Item>
            <Form.List name="initiateCorporationList">
              {(fields, operation) => {
                return (
                  <Table
                    size="small"
                    bordered
                    dataSource={dataSource}
                    // columns={dispatchTypeList.manage}
                    columns={columns}
                    pagination={false}
                  />
                );
              }}
            </Form.List>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default FormContent;
