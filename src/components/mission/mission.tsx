import React, { useState } from "react";
import { LaunchListQuery } from "../../generated/graphql";
import { Layout, Menu, Typography } from "antd";
import MissionInfo from "../missionInfo";

const { SubMenu } = Menu;
const { Title } = Typography;
const { Header, Content, Sider } = Layout;

interface props {
  data: LaunchListQuery;
}


const MissionList: React.FC<props> = ({ data }) => {
  const [id, setId] = useState(1);
  
  return (
    <div>
      <Layout>
        <Header className="header">
         {/* <Title style={{color:'#fff',padding:'5px'}}>Space X</Title> */}
         <img width='250px' src={'http://assets.stickpng.com/images/5842a770a6515b1e0ad75afe.png'} alt="logo" />
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
                    <Menu.Item
                      key={id}
                      onClick={() => setId(obj?.flight_number!)}
                    >
                      {obj?.mission_name} ({obj?.launch_year})
                    </Menu.Item>
                  ))}
                </SubMenu>
              </Menu>
            </Sider>
            <Content style={{ padding: "0 24px", minHeight: 280 }}>
              <MissionInfo id={id} />
            </Content>
          </Layout>
        </Content>
      </Layout>
    </div>
  );
};

export default MissionList;
