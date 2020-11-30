import React from 'react';
import useScript from './hooks/useScript';

class Scripts extends React.Component {
    componentDidMount() {
        useScript('//cdnjs.cloudflare.com/ajax/libs/annyang/2.6.1/annyang.min.js');
    }
    render() {
        return (
            <>
                <script>
{/*                     
                    if (annyang) {
                        var commands = {
                        'hello': function() { alert('Hello world!'); }
                        };
                    
                        // Add our commands to annyang
                        annyang.addCommands(commands);
                    
                        // Start listening.
                        annyang.start();
                    }
                 */}
                </script>
            </>
        );
    }
}

export default Scripts;