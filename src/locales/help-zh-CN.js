export default {
  help: {
    cloudregionZone: `
      <h4>地域</h4>
      <p>地域指的是 ECS 实例所在的物理位置。</p>
      <h4>可用区</h4>
      <p>可用区是指在同一地域内，电力和网络互相独立的物理区域。在同一地域内可用区与可用区之间内网互通，可用区之间能做到故障隔离。
      如果您的应用需要较高的容灾能力，建议您将云服务器 ECS 实例部署在同一地域的不同可用区内。
      如果您的应用在实例之间需要较低的网络时延，则建议您将 ECS 实例创建在相同的可用区内。</p>
    `,
    serverPassword: `
      <h4>关联密钥</h4>
      <p>通过设置SSH密钥的方式登录服务器</p>
      <h4>保留镜像设置</h4>
      <p>使用镜像原有密码，请确保您知晓选择镜像的原有密码。</p>
    `,
    networkIpSubnets: `
      <p>1.VLAN ID用于网络物理隔离，默认1，相同VLAN ID的IP子网互通，不同VLAN ID的IP子网不通。</p>
      <p>2.创建多个IP子网时，系统自动分配名称</p>
      <p>例如：名称为network，增加3个IP子网</p>
      <p>名称依次为network0、network1、network2。</p>
    `,
    networkPolicy: `
      <p>缺省策略为：物理机从高地址分配，虚拟机从低地址分配</p>
    `,
    networkDomain: `
      <p>系统为主机分配IP时，会同时创建一条指向该IP的域名记录，域名由主机名称+主机域名后缀组成。例如：</p>
      <p>主机名称为vm01，主机ip为192.168.1.1</p>
      <p>主机域名后缀为gh.baidu.com</p>
      <p>主机创建成功后，ping vm01.gh.baidu.com就会得到vm01的ip</p>
    `,
    cloudaccountSetAutoSyncTime: `
      <div>最少时间间隔为30分钟</div>
    `,
  },
}