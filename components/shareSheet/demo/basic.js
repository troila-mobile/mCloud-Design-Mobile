import React from 'react'
import {
    ShareSheet,
    Button,
} from '../..'

export default class extends React.Component {
    state={
        options:['text','value'],
    }
    render() {
        const {
            options,
        } = this.state
        return (
            <>
                <Button
                    onPress={
                        () => {
                            this.actionSheet.show()
                        }
                    }
                >
                    show
                </Button>
                <ShareSheet
                    ref={(e) => this.actionSheet = e}
                    options={['qq','qzone']}
                    disabledIndexArrary={[5]}
                    title="zhe是标题dfshdfshuhgiuhdubhdsfiubhdsiufhb"
                    onPress={(key) => console.log(key)}
                />
            </>
        )
    }
}
