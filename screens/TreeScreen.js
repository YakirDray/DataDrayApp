import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, ScrollView } from 'react-native';

// קומפוננטת צומת בעץ בינארי תורן
const TreeNode = ({ value }) => {
    return (
        <View style={styles.node}>
            <Text>{value}</Text>
        </View>
    );
};

// קומפוננטת העץ
const Tree = ({ node }) => {
    if (!node) {
        return null;
    }
    return (
        <View style={styles.tree}>
            <View style={styles.node}>
                <Text>{node.value}</Text>
            </View>
            <View style={styles.children}>
                <View style={styles.childContainer}>
                    <Tree node={node.left} />
                </View>
                <View style={styles.childContainer}>
                    <Tree node={node.right} />
                </View>
            </View>
        </View>
    );
};

// קומפוננטת הרשימה לפי סדר
const OrderedList = ({ explanation }) => {
    const values = explanation.trim().split(' ');
    return (
        <View>
            {values.map((value, index) => (
                <Text key={index}>{value}</Text>
            ))}
        </View>
    );
};

const BinarySearchTree = () => {
    const [root, setRoot] = useState(null);
    const [inputValue, setInputValue] = useState('');
    const [preorderExplanation, setPreorderExplanation] = useState('');
    const [inorderExplanation, setInorderExplanation] = useState('');
    const [postorderExplanation, setPostorderExplanation] = useState('');

    // פעולה להוספת צומת לעץ בינארי תורן
    const insertNode = (value, node) => {
        if (!node) {
            return { value: value, left: null, right: null };
        }
        if (value < node.value) {
            node.left = insertNode(value, node.left);
        } else {
            node.right = insertNode(value, node.right);
        }
        return node;
    };

    // פעולה להצגת העץ בסדר Preorder
    const preorderTraversal = (node) => {
        if (!node) {
            return;
        }
        setPreorderExplanation(prevExplanation => prevExplanation + node.value + " ");
        preorderTraversal(node.left);
        preorderTraversal(node.right);
    };

    // פעולה להצגת העץ בסדר Inorder
    const inorderTraversal = (node) => {
        if (!node) {
            return;
        }
        inorderTraversal(node.left);
        setInorderExplanation(prevExplanation => prevExplanation + node.value + " ");
        inorderTraversal(node.right);
    };

    // פעולה להצגת העץ בסדר Postorder
    const postorderTraversal = (node) => {
        if (!node) {
            return;
        }
        postorderTraversal(node.left);
        postorderTraversal(node.right);
        setPostorderExplanation(prevExplanation => prevExplanation + node.value + " ");
    };

    // פעולה לבניית העץ ולחישוב הסדרים
    const buildTree = () => {
        const value = parseInt(inputValue);
        if (isNaN(value)) {
            alert("יש להזין מספר תקין");
            return;
        }
        setRoot(insertNode(value, root));
        setInputValue('');
        setPreorderExplanation('');
        setInorderExplanation('');
        setPostorderExplanation('');
        preorderTraversal(root);
        inorderTraversal(root);
        postorderTraversal(root);
    };

    return (
        <ScrollView style={styles.container}>
            <TextInput
                style={styles.input}
                value={inputValue}
                onChangeText={setInputValue}
                placeholder="הזן ערך חדש לעץ"
                keyboardType="numeric"
            />
            <Button 
                title="הוסף לעץ" 
                onPress={buildTree} 
            />
            <View style={styles.treeContainer}>
                <View style={styles.tree}>
                    <Tree node={root} />
                </View>
                <View style={styles.explanationContainer}>
                    <Button 
                        title="Preorder" 
                        onPress={() => alert("הסדר Preorder הוא הסדר בו אנו מתחילים מהשורש, ממשיכים לצומת השמאלי, לאחר מכן לצומת הימני, ובסופו לתתי העץ של כל צומת.")} 
                    />
                    <OrderedList explanation={preorderExplanation} />
                    <Button 
                        title="Inorder" 
                        onPress={() => alert("הסדר Inorder הוא הסדר בו אנו מתחילים מהצומת השמאלי של כל צומת, לאחר מכן ממשיכים לצמתים האביבים, ובסופו מגיעים לצומת הימני של כל צומת.")} 
                    />
                    <OrderedList explanation={inorderExplanation} />
                    <Button 
                        title="Postorder" 
                        onPress={() => alert("הסדר Postorder הוא הסדר בו אנו מתחילים מהצומת השמאלי, לאחר מכן לצומת הימני, ובסופו לצומת השורש.")} 
                    />
                    <OrderedList explanation={postorderExplanation} />
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    input: {
        width: '90%',
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10,
    },
    treeContainer: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    tree: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    node: {
        width: 40,
        height: 40,
        borderWidth: 1,
        borderColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    children: {
        flexDirection: 'row',
    },
    childContainer: {
        marginLeft: 20,
    },
    explanationContainer: {
        marginLeft: 20,
    },
});

export default BinarySearchTree;
