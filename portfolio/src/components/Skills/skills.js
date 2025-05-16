import React from 'react'
import './skills.css';
import Python from '../../assets/python.jpeg';
import Excel from '../../assets/excel.jpeg';
import SqlServer from '../../assets/sqlserver2.jpeg';
import WEBDesign from '../../assets/website-design.png';
import PowerBi from '../../assets/powerbi.png';

const Skills = () => {
  return (
    <section id='skills'> 
        <span className="skillTitle">What I do</span>    
        <span className="skillDesc">I am a skilled and passionate Computer Engineer in design, data analysis and cybersecurity, with experience in creating visually attractive and easy-to-use websites and dashboards. I have deep knowledge of design, data analysis and attention to detail. I am proficient in HTML, CSS, JavaScript, Excel, SQLServer and PowerBi, as well as design software such as Figma..</span> 
        
        <div className="skillBars">

             <div className="skillBar">
                <img src={ WEBDesign } alt="WEBDesign" className="skillBarImg" />
                 <div className="skillBartext">
                    <h2>Website design</h2>
                    <p>Criar portfólio online, Criar um site de vendas, Criar site para empresas, pequenos negócios e para empreendedores, Criar site de restaurante.</p>
                </div>                                 
            </div>

             <div className="skillBar">
                <img src={ Excel } alt="Excel" className="skillBarImg" />
                 <div className="skillBartext">
                    <h2>Excel</h2>
                    <p>Criar gráficos, Automatizar tarefas, Análise de dados, Gerenciar informações e Criar relatórios </p>
                </div>                                 
            </div>

            <div className="skillBar">
                <img src={ Python } alt="Python" className="skillBarImg" />
                 <div className="skillBartext">
                    <h2>Python</h2>
                    <p>Desenvolvimento Web,  Análise de Dados e Ciência de Dados, Cibersegurança e Hacking Ético e Educação e Prototipagem.</p>
                </div>                                 
            </div>

            <div className="skillBar">
                <img src={ SqlServer } alt="SqlServer" className="skillBarImg" />
                 <div className="skillBartext">
                    <h2>SQL Server</h2>
                    <p> Criar, armazenar, gerenciar e recuperar dados de forma eficiente.</p>
                </div>                                 
            </div>           

            <div className="skillBar">
                <img src={ PowerBi } alt="PowerBi" className="skillBarImg" />
                 <div className="skillBartext">
                    <h2>Power Bi</h2>
                    <p>Preparar seus dados devidamente, Importar seus dados para o Power BI, Transformar seus dados no Power BI, Criar visualizações e relatórios, Compartilhar e colaborar.</p>
                </div>                                 
            </div>
        </div></section>
  );
}

export default Skills;


// Com o Excel, você pode fazer diversas coisas, incluindo:
// Criar gráficos: Transforme dados numéricos em representações visuais para facilitar a análise. 
// 1
// Automatizar tarefas: Utilize Macros e códigos em VBA para automatizar processos repetitivos. 
// 1
// Análise de dados: Realize cálculos complexos e análises estatísticas com fórmulas e funções. 
// 1
// Gerenciar informações: Organize e gerencie grandes volumes de dados em tabelas. 
// 1
// Criar relatórios: Elabore relatórios dinâmicos e interativos com dados atualizados. 
// 1

// Essas são apenas algumas das muitas funcionalidades que o Excel oferece para facilitar o trabalho com dados.

// As pessoas recorrem ao web design por vários motivos e, dependendo de seus objetivos finais, podem optar por criar sites de qualquer um dos seguintes tipos:

// Um portfólio online para apresentar trabalhos.
// Criar um site de vendas para vender online.
// Um site para empresas e pequenos negócios para empreendedores que desejam administrar e expandir seus negócios online.
// Um blog para compartilhar informações com outras pessoas que pensam da mesma maneira.
// Um site de restaurante para facilitar a realização de pedidos, reservas e pagamentos online.

// Para começar a usar o Power BI, você precisa: 
// Awari
// +2
// Preparar seus dados devidamente.
// Importar seus dados para o Power BI.
// Transformar seus dados no Power BI.
// Criar visualizações e relatórios.
// Compartilhar e colaborar.
// Para utilizar gratuitamente a solução Power BI Desktop, onde todo o processo de trabalho começa, você precisa baixar o Power BI na App
