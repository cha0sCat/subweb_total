function compare(node_a, node_b) {
    // 先按 香港、日本、其他、免费的顺序进行粗略排序
    // 再按照节点标号进行细分排序
    if (node_a.Remark.includes("港") && !node_b.Remark.includes("港")) {
        return true;
    }
    if (!node_a.Remark.includes("港") && node_b.Remark.includes("港")) {
        return false;
    }
    // 日本节点
    if ((!node_a.Remark.includes("免费") && node_a.Remark.includes("日")) && !node_b.Remark.includes("日")) {
        return true;
    }
    if (!node_a.Remark.includes("日") && (!node_a.Remark.includes("免费") && node_b.Remark.includes("日"))) {
        return false;
    }
    // 免费节点
    if (node_a.Remark.includes("免费") && !node_b.Remark.includes("免费")) {
        return false;
    }
    if (!node_a.Remark.includes("免费") && node_b.Remark.includes("免费")) {
        return true;
    }
    // 其他节点
    return node_a.Remark < node_b.Remark;
}