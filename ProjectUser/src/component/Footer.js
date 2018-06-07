import React, { Component } from 'react';





class Footer extends Component 
{
    render()
    {
        return (
            <div className="Container  about" id="Bawah">
                <div className="isifoter navbar-footer">
                    <div className="col-xs-12 col-sm-12 col-md-12 row">
                        <div className="col-xs-12 col-sm-12 col-md-4">
                            <p className="JudulF">
                                About Us
                            </p>
                            <hr id="Menu"/>
                            <p className="IsiF">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, commodi consectetur blanditiis nisi molestiae officiis, neque omnis at qui sunt esse laborum ducimus eius ut quia praesentium, quidem voluptas mollitia?
                            </p>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-4">
                            <p className="JudulF">
                                Contact us
                            </p>
                            <hr id="Menu"/>
                            <p className="IsiF">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. A ipsam reprehenderit aliquid, est aut doloremque perspiciatis odit quisquam sint, fugiat possimus cum dignissimos blanditiis!
                            </p>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-4">
                            <p className="JudulF">
                                Join us
                            </p>
                            <hr id="Menu"/>
                            <p className="IsiF">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus, culpa nostrum? Eum facilis minus illo, dolore eveniet quae necessitatibus veniam aspernatur quis. Libero cupiditate nesciunt consequuntur! 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Footer;