import React from "react";
import { LaunchListQuery } from "../../generated/graphql";
import { Layout, Menu, Typography } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;
const { Title } = Typography;
const { Header, Content, Footer, Sider } = Layout;

interface props {
  data: LaunchListQuery;
}
{
  /* <ul>
    {data.launches?.map((obj,id)=>(
        <li key={id}>
            {obj?.mission_name} ({obj?.launch_year})
        </li>
    ))}
</ul> */
}
const MissionList: React.FC<props> = ({ data }) => {
  return (
    <div>
      <Layout>
        <Header className="header">
              <Title level={1} type="secondary"> Space X</Title>
        </Header>
        <Content style={{ padding: "0 50px" }}>
          <Layout
            className="site-layout-background"
            style={{ padding: "24px 0" }}
          >
            <Sider className="site-layout-background" width={200}>
              <Menu
                mode="inline"
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                style={{ height: "100%" }}
              >
                <SubMenu key="sub1" title="Missions">
                  {data.launches?.map((obj, id) => (
                    <Menu.Item key="id">
                      {obj?.mission_name} ({obj?.launch_year})
                    </Menu.Item>
                  ))}
                </SubMenu>
              </Menu>
            </Sider>
            <Content style={{ padding: "0 24px", minHeight: 280 }}>
              Content
            </Content>
          </Layout>
        </Content>
      </Layout>
    </div>
  );
};

export default MissionList;
